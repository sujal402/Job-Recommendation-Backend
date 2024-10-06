const User = require('../Models/UserModel');


exports.createUserProfile = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User profile created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
