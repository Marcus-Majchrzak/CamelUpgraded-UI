import styled from "@emotion/styled";
import { MCASH } from "./colours";

type CashSymbolProps = {
    size: number;
    fontSize: number;
  };
const CashSymbol = styled.div<CashSymbolProps>`
    padding: 10px;
    margin: 10px;
    display: inline-block;
    background: ${MCASH};
    border-radius: 50%;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.fontSize}px;
  `;

export default CashSymbol