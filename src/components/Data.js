import { useObserver } from "mobx-react-lite";
import { useStore } from "../StoreContext";
import React, { useEffect } from "react";
import styled from "styled-components";

const Table = styled.table``;
const Thead = styled.thead``;
const Row = styled.tr``;
const Cell = styled.td``;
const CellHead = styled.th``;
const LogoImage = styled.img``;

export const Data = () => {
  const coinsStore = useStore();

  // hook to call my api call once load
  useEffect(() => {
    coinsStore.updateCoins();
  }, []);
  let index = 0;

  return useObserver(() => (
    <Table>
      <Thead>
        <Row>
          <CellHead>#</CellHead>
          <CellHead>Coin</CellHead>
          <CellHead>Symbol</CellHead>
          <CellHead>Price</CellHead>
          <CellHead>1h</CellHead>
          <CellHead>24h</CellHead>
          <CellHead>7d</CellHead>
          <CellHead>24h volume</CellHead>
          <CellHead>Mkt Cap</CellHead>
        </Row>
        {coinsStore.coins.map((coin) => {
          index += 1;
          return (
            <Row>
              <Cell key={index}>{index}</Cell>
              <Cell key={coin.name}>
                <LogoImage src={coin.image} alt="Logo" />;{coin.name}
              </Cell>
              <Cell key={coin.symbol}>{coin.symbol}</Cell>
              <Cell key={coin.current_price}>{coin.current_price}</Cell>
              <Cell key={coin.price_change_percentage_1h_in_currency}>
                {coin.price_change_percentage_1h_in_currency}
              </Cell>
              <Cell key={coin.price_change_percentage_24h_in_currency}>
                {coin.price_change_percentage_24h_in_currency}
              </Cell>
              <Cell key={coin.price_change_percentage_7d_in_currency}>
                {coin.price_change_percentage_7d_in_currency}
              </Cell>
              <Cell key={coin.total_volume}>{coin.total_volume}</Cell>
              <Cell key={coin.market_cap}>{coin.market_cap}</Cell>
            </Row>
          );
        })}
      </Thead>
    </Table>
  ));
};
