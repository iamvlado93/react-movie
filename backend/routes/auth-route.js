const { Router } = require('express');
const User = require('../models/user');
const router = Router();
const bcrypt = require('bcryptjs')

router.post('/register', async (req, res) => {
    try {
        const {firstName, lastName, email, password} = req.body
        const candidate = await User.findOne({ email })

        if(candidate) {
            return res.status(400).json({ message: "Such email has already been registered"})
        }
        
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ firstName, lastName, email, password: hashedPassword})
        
        await user.save()

        res.status(201).json({ message: "The user has been created"})

    } catch (e) {
        res.status(500).json({ message: "Ooops, something went wrong. Try again."})
    }
})

router.post('/login', (req, res) => {

})

module.exports = router;