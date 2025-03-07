const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models")

async function authentication(req, res, next) {
    try {
        const bearerToken = req.headers.authorization
        // console.log(bearerToken, '<<<')

        if (!bearerToken) {
            res.status(401).json({ message: "Invalid Token" });
            return
        }
        const accesToken = bearerToken.split(" ")[1]

        const data = verifyToken(accesToken)

        const user = await User.findByPk(data.id)
        if(!user) {
            res.status(401).json({ message: "Invalid Token" });
            return
        }

        req.user = user
        next()
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

module.exports = authentication