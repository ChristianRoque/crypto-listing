import StoreContext, { useStore } from "../StoreContext";
import React, { Component, useEffect } from "react";

export const Updater = () => {
  const coinsStore = useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      coinsStore.updateCoins();
    }, 30000);
    return () => clearInterval(interval);
  });
  return null;
};
