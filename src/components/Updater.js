import { useStore } from "../StoreContext";

export const Updater = () => {
  const coinsStore = useStore();

  const interval = setInterval(() => {
    coinsStore.updateCoins();
    console.log(coinsStore.coins);
  }, 10000);

  return () => clearInterval(interval);
};
