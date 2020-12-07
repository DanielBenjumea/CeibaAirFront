import styled from 'styled-components';

export const DivContainer = styled.div`
	padding: 30px;
	text-align: center;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    text-align: center;
    background-color: 
`;

export const GridItem = styled.div`
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	margin: 10px;
	padding: 20px;
	border-radius: 10px;
	background-color: #F0F0F0;
`;

export const Button = styled.button`
	width: 100%;
	background: white;
	padding: 3px;
	font-size: 16px;
	border-radius: 10px;
	border-color: #90ee90;
    font-weight: bold;

	&:hover {
		cursor: pointer;
		background-color: #90ee90;
		border-color: transparent;
		color: white;
	}

    &:focus {
        outline: none;
    }
`;
