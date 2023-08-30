import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../services/api';

const ItemConteiner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 
    gap: 10px;
    border-radius: 5px;
    color: #29303b;
    margin-bottom: 10px;
    padding: 10px;
    justify-content: space-between;
    width: 80%;
    border: 1px solid gray;

    .buttons{
      display: flex;
      align-items: center;
    }

    .buttonEditar{
     text-decoration: none;
     padding: 8px;
     margin-right: 10px;
     color: white;
    background-color: blue;
    border-radius: 4px;
    border: 1px solid black;
      transition: .3s;
    &:hover{
      transform: scale(1.1);
    }
  }
  
  .buttonExcluir{
    background-color: red;
      text-decoration: none;
     padding: 9px;
     margin-right: 10px;
     color: white;
    border-radius: 4px;
    transition: .3s;
    &:hover{
      transform: scale(1.1);
    }
    }
    `;



const Thumbnaill = styled.img`
   width: 180px;
   height: 200px;
    border-radius: 5px;

`;

const Title = styled.div`
    color: #ffffff;
    text-shadow: 5px 5px 15px black;
    width: 43%;


    `;

const Price = styled.div`
    color: white;
    text-align: center;
    background-color: purple;
    padding: 5px;
    border-radius: 5px;


 `;

const ItemLink = styled.a`
    text-decoration: none;

    `;



export default function ListGamesRow({ game }) {

    const navigate=useNavigate()

    const deleteGame=(id) =>{
      const url=`/data/${id}`
      api.delete(url)
    }


  return (
    <>
        <ItemConteiner>
          <Thumbnaill src={game.image} />


          <Title>{game.title}</Title>
          <Price>{game.price}</Price>
            <div className='buttons'>
                <Link className='buttonEditar' to={`/editar/${game.id}`}>Editar</Link>
                <button 
                    className='buttonExcluir' 
                    onClick={ () => deleteGame(game.id)}
                >
                  Excluir
                </button>
            </div>



        </ItemConteiner>
    </>
  )
}
