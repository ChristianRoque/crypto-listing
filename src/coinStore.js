import api from "./api";

export function createCoinStore() {
  let defCoins = [
    "bitcoin",
    "ethereum",
    "binancecoin",
    "tether",
    "polkadot",
    "cardan",
    "ripple",
    "uniswap",
    "litecoin",
    "chainlink",
    "bitcoin-cash",
    "usd-coin",
    "stellar",
    "wrapped-bitcoin",
    "dogecoin",
    "theta-token",
    "nem",
    "aave",
    "crypto-com-chain",
    "cosmos",
    "vechain",
    "okb",
  ];

  return {
    coins: [],
    updateCoins() {
      api.service
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" +
            defCoins.join("%2C") +
            "&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
        )
        .then((res) => {
          console.log(res.data);
          this.coins = res.data;
        })
        .catch((err) => console.error(err));
    },
  };
}
