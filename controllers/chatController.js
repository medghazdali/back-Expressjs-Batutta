// controllers/chatController.js

require('dotenv').config();
const axios = require('axios');

exports.getTravelIdeas = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required.' });
    }

    // Prepare the POST request body for ChatGPT
    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful travel assistant providing itinerary suggestions.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      // Optional: Adjust temperature, max_tokens, etc.
      temperature: 0.7
    };

    // Send POST to OpenAI's Chat Completions endpoint
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      requestBody,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    // The AI's message
    const assistantMessage = response.data.choices[0].message.content;

    return res.json({
      message: 'Success',
      data: assistantMessage
    });
  } catch (error) {
    console.error('OpenAI Error:', error?.response?.data || error.message);
    return res.status(500).json({
      message: 'Failed to get travel ideas',
      error: error?.response?.data || error.message
    });
  }
};
