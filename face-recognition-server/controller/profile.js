const handleProfile = (req, res, db) => {
    const { id } = req.params;
    
    db('users')
     .where({id})
      .then(user => {
        if(user.length >= 1){  
            res.json(user[0])
        }else{
            res.json('user does not exist')
        }
     })
}

module.exports = {
    handleProfile: handleProfile
}