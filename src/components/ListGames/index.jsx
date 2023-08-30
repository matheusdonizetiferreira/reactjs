import React from 'react';
import styled from 'styled-components';
import './button.css';

const ItemConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
   width: 331px; 
    height: 605px;
    gap: 10px;
    border-radius: 5px;
    color: #29303b;
    margin-bottom: 10px;
    padding: 10px;
    `;



const Thumbnaill = styled.img`
   width: 100%;
   height: 80%;
    border-radius: 5px;
    box-shadow: 0px 0px 20px pink; 

`;

const Title = styled.div`
    color: #ffffff;
    text-shadow: 5px 5px 15px black;


    `;

const Price = styled.div`
    color: white;
    text-align: center;
    background-color: purple;
    padding: 5px;
    border-radius: 5px;

 `;

const Button = styled.div`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  color: white;
  border-color: #a5a4a4;
  transition: border-color 0.25s;
  
  &:hover {
      border-color: #626af5;
  }
`;

const ItemLink = styled.a`
    text-decoration: none;

    `;



export default function ListGames({ game }) {


  return (
    <>
      <ItemLink href={game.url} target="_blank">
        <ItemConteiner>
          <Thumbnaill src={game.image} />


          <Title>{game.title}</Title>
          {/* <Price>{game.price}</Price> */}
          {/* <Button className="codepen-button">Comprar</Button> */}
          <div data-tooltip= {`${game.price}`} className="button">
            <div className="button-wrapper">
              <div className="text">Comprar</div>
              <span className="icon">
                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
              </span>
            </div>
          </div>



        </ItemConteiner>
      </ItemLink>
    </>
  )
}
