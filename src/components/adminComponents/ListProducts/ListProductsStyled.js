import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;

  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }
  tr {
    border: 1px solid #ddd;
  }
  th {
    background-color: black;
  }

  tr:hover {
    background-color: #121212;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 8px 10px;
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    th {
      background-color: transparent;
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tr {
      border: 1px solid #ddd;
    }
    td {
      border: none;
      position: relative;
      padding-left: 50%;
      text-align: right;
    }

    td:before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: calc(50% - 20px);
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
    }
  }
`;
