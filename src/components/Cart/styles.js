import styled from "styled-components";


export const ContainerCart = styled.div`
  display: flex;
  width: 100%;
  margin-top:20px;
  

  section{
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    max-width: 380px;
    height: 535px;
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;
  }
  .container__tittle{
    display: flex;
    align-items: center;
    height: 65px;
    background: #27AE60;
    border-radius: 5px 5px 0px 0px;
  }
  
  h1{
    margin-left: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }

  ul{
    display: flex;
    flex-direction: row;
    margin: 0;
    
    width: 100%;
    height: 80px;
    background: #F5F5F5;
    border-radius: 0px 0px 5px 5px;
    margin-top: 20px;
  }

  figure {
    background: #E0E0E0;
    margin-left: 15px;
    width: 80px;
    height: 80px;
    border-radius: 5px;
  }

  img{
    margin: 5px;
    width: 70px;
    height: 70px;
    
  }

  .container__category{
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 220px;
    margin-left: 15px;
  }

  h2{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
    margin-top: 10px;
  }

  .container__button{
    display: flex;
    justify-content: end;
    width: 30%;
  } 

  .button__remove{
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #BDBDBD;
    border: none;
    margin-top: 7px;
    margin-right: 15px;
    background: #F5F5F5;
  }
  @media (min-width: 450px){
    justify-content: center;
    section{
      width: 80%;
      margin-right: 5%;
      margin-left: 10%;
    }
  }

  @media (min-width: 800px){
    float: right;
    margin-right: 4%;
    margin-left: 350px;
    width: 380px; 
    margin-top: -2200px;

    section{
      justify-content: flex-end;
      width: 100%;
    }
  }

  @media (min-width: 1106px) {
    margin-right: 2%;
    margin-top: -720px;
  }

  @media (min-width: 1600px) {
    margin-right: 5%;
    
  }

  
`;