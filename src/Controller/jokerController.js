const axios = require('axios');

exports.getRandomJoke = async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.json({ joke: response.data.value });
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
};
