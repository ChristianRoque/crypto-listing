import { useObserver } from "mobx-react-lite";
import { useStore } from "../StoreContext";
import React, { useEffect } from "react";
import styled from "styled-components";

// Styled components

const Table = styled.table`
  max-width: 100%fit-content;
  border-spacing: 0px;
  font-size: 75%;
`;
const Thead = styled.thead``;
const Row = styled.tr``;
const Cell = styled.td`
  color: ${(props) => {
    if (props.color == null) {
      return "black";
    } else {
      return props.color.toString().includes("-") ? "red" : "green";
    }
  }};
  text-align: right;
  background-color: #cfeff9;
`;
const CellHead = styled.th`
  width: 10%;
  text-align: center;
  font-size: 20px;
  background: #4e70fd;
  color: white;
`;
const LogoImage = styled.img`
  max-width: 20%;
  padding-right: 10%;
  height: auto;
`;

export const Data = () => {
  const coinsStore = useStore();

  // hook to call my api call once load
  useEffect(() => {
    coinsStore.updateCoins();
  }, []);

  let index = 0;

  console.log("refreshed");

  return useObserver(() => (
    <Table>
      <Thead>
        <Row>
          <CellHead id="index-Header">#</CellHead>
          <CellHead>Coin</CellHead>
          <CellHead>Symbol</CellHead>
          <CellHead>Price</CellHead>
          <CellHead>1h</CellHead>
          <CellHead>24h</CellHead>
          <CellHead>7d</CellHead>
          <CellHead>24h volume</CellHead>
          <CellHead>Mkt Cap</CellHead>
        </Row>
        {coinsStore.coins.length < 20
          ? null
          : coinsStore.coins.map((coin) => {
              index += 1;
              return (
                <Row>
                  <Cell id="index" key={index}>
                    {index}
                  </Cell>
                  <Cell id="name" key={coin.name}>
                    <LogoImage id="icon" src={coin.image} alt="Logo" />
                    {coin.name}
                  </Cell>
                  <Cell className="symbol" key={coin.symbol}>
                    {coin.symbol}
                  </Cell>
                  <Cell className="price" key={coin.current_price}>
                    ${coin.current_price}
                  </Cell>
                  <Cell
                    color={coin.price_change_percentage_1h_in_currency}
                    key={coin.price_change_percentage_1h_in_currency}
                  >
                    {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                  </Cell>
                  <Cell
                    color={coin.price_change_percentage_24h_in_currency}
                    key={coin.price_change_percentage_24h_in_currency}
                  >
                    {coin.price_change_percentage_24h_in_currency.toFixed(2)}%
                  </Cell>
                  <Cell
                    color={coin.price_change_percentage_7d_in_currency}
                    key={coin.price_change_percentage_7d_in_currency}
                  >
                    {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </Cell>
                  <Cell key={coin.total_volume}>
                    $
                    {coin.total_volume
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Cell>
                  <Cell key={coin.market_cap}>
                    $
                    {coin.market_cap
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Cell>
                </Row>
              );
            })}
      </Thead>
    </Table>
  ));
};
