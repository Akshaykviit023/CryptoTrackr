const BASE_URL = `https://api.coingecko.com/api/v3`;

const requests = {
    fetchTrending: `${BASE_URL}/search/trending`,
    fetchPrice: `${BASE_URL}/coins/bitcoin`,
};

export default requests;