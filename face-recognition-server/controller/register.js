const handleRegister = (req, res, db, bcrypt) => {
    const { name, email, password }  =  req.body;

    const hash = bcrypt.hashSync(password);
    
    if (name == '' ||
        email == '' ||
        password == ''
        ){
        res.status(404).json('fill in all inputs');
    }else{
        db.transaction(trx => {
            trx.insert({ email, hash })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                .insert({
                    name: name,
                    email: loginEmail[0],
                    joined: new Date()
                })
                .returning('*')
                .then(user => {
                    res.json(user[0])
                })
                .then(trx.commit)
                .catch(trx.roll) 
            })
            .catch(err => res.status(400).json('email already exist'));
        })
               
    }

}

module.exports = {
    handleRegister: handleRegister
}