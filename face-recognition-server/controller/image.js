const handleImage = (req, res, db) => {
    const { id } = req.body;

    db('users')
     .where({id})
      .returning('entries')
       .increment({
           entries: 1
       })
        .then(entries => {
            if (entries.length > 0){
                res.json(entries[0])
            }else{
                res.status(400).json('unable to get user')
            }
        })
         .catch(err => {
             res.status(400).json('unable to get entries')
         })
}

module.exports = {
    handleImage: handleImage
}