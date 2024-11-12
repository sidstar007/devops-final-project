const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).send(order);
};

exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).send({ error: 'Order not found' });
  res.send(order);
};