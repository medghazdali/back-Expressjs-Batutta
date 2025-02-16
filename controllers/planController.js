// controllers/planController.js

const Plan = require('../models/planModel');

exports.placeOrder = async (req, res) => {
  try {
    const {
      userId,
      destination,
      startDate,
      endDate,
      numberOfAdults,
      numberOfChildren,
      numberOfInfants,
      tripTypes,
      activities,
      preferredClimate,
      overallBudget,
      accommodationType,
      transportation
    } = req.body;

    // In a real app with auth, you'd extract userId from the JWT token (decoded) 
    // instead of trusting it directly in the request body.

    const newPlan = new Plan({
      user: userId,
      destination,
      startDate,
      endDate,
      numberOfAdults,
      numberOfChildren,
      numberOfInfants,
      tripTypes,
      activities,
      preferredClimate,
      overallBudget,
      accommodationType,
      transportation
    });

    await newPlan.save();

    return res.status(201).json({
      message: 'Plan created successfully',
      plan: newPlan
    });
  } catch (error) {
    console.error('PlaceOrder Error:', error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

/**
 * Process Payment (Update Order Status)
 */
exports.processPayment = async (req, res) => {
  try {
      const { orderId } = req.body;

      if (!orderId) {
          return res.status(400).json({ message: 'Order ID is required' });
      }

      // Find the order
      const order = await Order.findById(orderId);
      if (!order) {
          return res.status(404).json({ message: 'Order not found' });
      }

      if (order.orderStatus === true) {
          return res.status(400).json({ message: 'Order is already paid' });
      }

      // Update the order status to paid
      order.orderStatus = true;
      await order.save();

      return res.json({
          message: 'Payment processed successfully',
          data: order
      });
  } catch (error) {
      console.error('Payment Error:', error);
      return res.status(500).json({
          message: 'Server error',
          error: error.message
      });
  }
};

