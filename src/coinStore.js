import api from "./api";

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
];

export function createCoinStore() {
  return {
    coins: ["hello"],
    rendered: false,
    async updateCoins() {
      const res = api.service.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" +
          defCoins.join("%2C") +
          "&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      );
      this.coins = (await res).data;
      this.rendered = true;
      console.log(this.coins);
    },
  };
}
