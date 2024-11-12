const User = require('../models/User');

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send({ error: 'User not found' });
  res.send(user);
};