// routes/chatRoutes.js

const express = require('express');
const router = express.Router();
const { getTravelIdeas } = require('../controllers/chatController');

/**
 * @swagger
 * /api/chat/travel-ideas:
 *   post:
 *     tags: [ChatGPT]
 *     summary: Get travel suggestions from ChatGPT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - prompt
 *             properties:
 *               prompt:
 *                 type: string
 *                 example: "I want to travel to Italy for 10 days with a mid-range budget..."
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Prompt is required
 *       500:
 *         description: Failed to get travel ideas
 */
router.post('/travel-ideas', getTravelIdeas);

module.exports = router;
