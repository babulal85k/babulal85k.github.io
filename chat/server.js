import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const openaiApiKey = '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'; // Use your actual API key

app.post('/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const response = await fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo-instruct/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 150
            })
        });

        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            res.json({ reply: data.choices[0].text });
        } else {
            console.error('Unexpected response structure:', data);
            res.status(500).json({ error: 'Unexpected response from OpenAI API' });
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
