const handleRoot = (req, res, db) => {
    db('users')
    .orderBy('id')
    .then(data => {
        res.json(data)
    })
}

module.exports = {
    handleRoot: handleRoot
}