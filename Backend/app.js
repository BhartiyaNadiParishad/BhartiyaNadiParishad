const express = require('express')
const axios = require('axios')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/submit-form', async (req, res) => {
    const formData = req.body;
    try {
        const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
            params: {
                secret: '6LdEM9YpAAAAAEJRBvhwReKQQ9xkpIPo4j2urtro',
                response: formData.CaptchaValue ,
            }
        });
        const { success } = response.data;
        if (success) {
            console.log('reCAPTCHA verification successful');
            res.json({ success: true });
        } else {
            console.log('reCAPTCHA verification failed');
            res.json({ success: false, error: 'reCAPTCHA verification failed' });
        }
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error.message);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})