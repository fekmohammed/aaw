const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render('users', { users });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server 3 Error');
  }
};

// Update the createUser function in userController.js
exports.createUser = async (req, res) => {
  try {
    const { name, username, password, role } = req.body;

    // Check if a user with the same username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // If a user with the same username already exists, return an error
      return res.status(400).send('Username is already taken');
    }

    // If no user with the same username exists, create the new user
    const newUser = await User.findOneAndUpdate(
      { username },
      { name, password, role: role || 'client' },
      { upsert: true, new: true }
    );
    res.redirect('/users');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server 2 Error');
  }
};
