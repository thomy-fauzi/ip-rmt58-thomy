const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
    static async register(req, res){
        try {
            const user = await User.create(req.body)
            res.status(201).json({
                id : user.id,
                name: user.name,
                email : user.email,
            })
        } catch (err)  {
            console.log('Error : ', err)
            if (err.name === 'SequelizeValidationError') {
                res.status(400).json({ message: err.errors[0].message });
            } else if (err.name === 'SequelizeUniqueConstraintError'){
                res.status(400).json({ message: err.errors[0].message });
            } else {
                res.status(500).json({message: 'Internal Server Error'})
            }
        }
    }

    static async login(req, res){
        try {
            const { email, password } = req.body
            if (!email) {
                return res.status(400).json({ message: 'Email is required' });
            }
            if (!password) {
                return res.status(400).json({ message: 'Password is required' });
            }

            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const isValidPassword = comparePassword(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const access_token = signToken({ id: user.id })
            res.status(200).json({ access_token })
        } catch (err){
            console.log(err)
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
}

module.exports = UserController;