// backend/server.js
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Google OAuth2 Configuration
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Middleware to verify Google access token
const verifyGoogleToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const ticket = await oauth2Client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    req.user = ticket.getPayload();
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Routes for Google Calendar API
app.post('/events', verifyGoogleToken, async (req, res) => {
  try {
    oauth2Client.setCredentials({ access_token: req.headers.authorization.split(' ')[1] });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const { summary, description, start, end } = req.body;
    const event = await calendar.events.insert({
      calendarId: 'primary',
      resource: {
        summary,
        description,
        start: { dateTime: start },
        end: { dateTime: end }
      }
    });

    res.json(event.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/events', verifyGoogleToken, async (req, res) => {
  try {
    oauth2Client.setCredentials({ access_token: req.headers.authorization.split(' ')[1] });
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: (new Date()).toISOString(),
      maxResults: 50,
      singleEvents: true,
      orderBy: 'startTime'
    });

    res.json(response.data.items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;