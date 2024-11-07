require('dotenv');

const auth = {
    type: 'OAuth2',
    user: 'md.2101013cs@iiitbh.ac.in',
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN
};



module.exports = { auth };
