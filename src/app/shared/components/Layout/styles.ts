import imagenAvion from '../../../../assets/img/avion.jpg';
import styled from 'styled-components';


export const DivContainer = styled.div`
  padding-top: 20px;
  padding-left: 16px;
  padding-right: 16px;
`;


export const FlexContainer = styled.div`
	height: 24rem;
	background-image: url(${imagenAvion});
	background-size: cover;
	background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const DivItem = styled.div`
  width: 50%;
  background-color: white;
  padding: 20px 10px;
  border-radius: 0 50px 50px 0;
  font-size: 2.0rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 480px) {
    width: 85%;
    font-size: 1.5rem;
  }
`;

