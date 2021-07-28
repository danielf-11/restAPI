const sql = require('../db/connection')
const {QueryTypes} = require("sequelize")

exports.createUser = async (req, res) =>{
try {
    const user = [
    req.body.user,
    req.body.email,
    req.body.pass
    ]
    const text = "INSERT INTO movieusers (username, email, password) VALUES(:username, :email, :pass) RETURNING *"
    await sql.query(text, {
        replacements: {
            username: req.body.user,
            email: req.body.email,
            pass: req.body.pass
        },
        type: QueryTypes.INSERT,
    })
    res.status(200).send({message: "User created"})

} catch (error) {
    res.status(500).send({message: "Create user unsucessful"})
}
}

exports.getOneUser = (req, res) =>{

    try {
        const user = {
            username: req.params.username,
        }
        res.status(200).send(user)
        
    } catch (error) {
        res.status(400).send({message: "User not found"})
    }

}