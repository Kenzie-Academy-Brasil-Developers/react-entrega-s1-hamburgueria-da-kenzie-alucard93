import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;

  section{
    margin-left: 21px;
    width: 80%;
    height: 223px;
    max-width: 365px;
  } 
  .container__tittle{
    display: flex;
    align-items: flex-end;
    height: 65px;
    background: #27AE60;
    border-radius: 5px 5px 0px 0px;
  }

  h1{
    margin-left: 20px;
    margin-bottom: 13px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }

  .container__empty{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;
    height: 158px;
  }

  h4{
    height: 40px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #333333;
  }
  p{
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #828282;
  }
`;