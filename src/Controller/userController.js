const User = require('../models/userModel');

exports.viewProfile = async (req, res) => {
    const user = await User.findOne({ username: req.user.username });
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json({ username: user.username });
};

exports.logout = (req, res) => {
  
    res.send('User logged out successfully');
};
