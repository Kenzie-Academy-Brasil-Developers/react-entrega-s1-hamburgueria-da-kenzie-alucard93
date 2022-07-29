import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;

    article{
    margin: 0 auto;
    width: 100%;
    max-width: 382px;
    height: 166px;
    background: #F5F5F5;

  }

  .border {
    display: flex;
    width: 90%;
    flex-direction: column;
    margin-top: 19px;
    margin-left: 5%;
    margin-right: 5%;
    border-top: 2px solid #E0E0E0;
  }

  .container__total{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 21px;
    margin-left: 5%;
    margin-right: 5%;
  }

  .container__total{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #333333;
  }

  .container__price{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    background: #E0E0E0;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    width: 90%;
    height: 60px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #828282;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
  }

`;