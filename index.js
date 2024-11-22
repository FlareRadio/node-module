const axios = require('axios');

const flareradio = {
    stats: async function() {
        try {
            const response = await axios.get('https://flareradio.net/staff/api/stats');
            return response.data;
        } catch (error) {
            return null;
        }
    },

    upcoming: async function() {
        try {
            const response = await axios.get('https://flareradio.net/staff/api/upcoming');
            return response.data;
        } catch (error) {
            return null;
        }
    }
};

module.exports = flareradio;
