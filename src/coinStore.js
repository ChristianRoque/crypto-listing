import api from "./api";
import { configure } from "mobx";

// configuring mobx to allow change in observable variable without action
configure({
  enforceActions: "never",
});

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
    async updateCoins() {
      const res = api.service.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=" +
          defCoins.join("%2C") +
          "&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
      );
      this.coins = (await res).data;
    },
    trackNewCoin(coin) {
      defCoins.push(coin);
    },
  };
}
