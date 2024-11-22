const flareradio = require('./index');
const axios = require('axios');

jest.mock('axios');

describe('flareradio', () => {
    it('should fetch stats', async () => {
        const data = { listeners: 100 };
        axios.get.mockResolvedValue({ data });

        const result = await flareradio.stats();
        expect(result).toEqual(data);
    });

    it('should fetch upcoming', async () => {
        const data = { shows: [] };
        axios.get.mockResolvedValue({ data });

        const result = await flareradio.upcoming();
        expect(result).toEqual(data);
    });
});
