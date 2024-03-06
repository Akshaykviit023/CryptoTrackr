const BASE_URL = `https://api.coingecko.com/api/v3`;

const requests = {
    fetchTrending: `${BASE_URL}/search/trending`,
    fetchPrice: `${BASE_URL}/coins`,
    fetchCoins: `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`,
    fetchCoinDetails: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en",
};

export default requests;