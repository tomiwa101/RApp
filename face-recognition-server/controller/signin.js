const handleSignin = (db, bcrypt) => (req, res) => {
    const { email, password } = req.body;

    db.select('email', 'hash')
    .from('login')
    .where({ email })
    .then(data => {
        const isValid = bcrypt.compareSync(password, data[0].hash);
        if(isValid){
            return db('users')
            .where({ email })
            .returning('*')
            .then(user => {
                res.json(user[0])
            })
            .catch(err => res.status(400).json('unable to grab user from the database'))
        }else{
            res.status(400).json('wrong email and password match')
        }
        
    })
    .catch(err => res.status(400).json('email does not exist'))
}

module.exports = {
    handleSignin: handleSignin
}