import styled from "styled-components";



export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  margin-top: 20px;

  ::-webkit-scrollbar{
    border-radius: 20px;
    width: 30px;
    height: 15px;
    
    
  }
  ::-webkit-scrollbar-track {
    margin-left: 21px;
}

::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 2px solid #E0E0E0;
  background: #E0E0E0;
} 

  .container__product{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 3%;
    max-width: 300px;
    min-width: 299px;
    height: 346px;
    max-height: 346px;
    background: #FFFFFF;
    border: 2px solid #E0E0E0;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .container__figure{
    width: 100%;
    height: 150px;
    background: #F5F5F5;
  }

  .container__figure--img{
    width: 60%;
    height: 100%;
  }

  .container__description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FFFFFF;
  }

  .container__description--tittle{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
    height: 40px;
    margin-left: 21px;
    margin-top: 26px;
  }

  .container__description--category{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #828282;
    height: 16px;
    margin-left: 21px;
  }

  .container__description--price{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #27AE60;
    height: 24px;
    margin-left: 21px;
    margin-top: 14px;
  }

  .container__description--button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    gap: 10px;
    background: #27AE60;
    border: 2px solid #27AE60;
    border-radius: 8px;
    height: 40px;
    width: 36%;
    max-width: 106px;
    margin-left: 20px;
    margin-top: 14px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }

  @media (min-width: 800px){
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 2200px;
  }

  @media (min-width: 1106px){
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    width: 670px; 
    height: 1070px;
  
    .container__product{
      margin-right: 0;
    }
  
  }

    @media (min-width: 1600px){
    width: 1060px;
    height: 720px; 
      
    }
  
`


