import { useState, useEffect } from "react";
import './administrar.css';
import ListGamesRow from "../../components/ListGamesRow";
import { useNavigate } from "react-router-dom";
import api from './../../services/api'

function Administrar() {
      const navigate = useNavigate()
      const [games, setGames] = useState([]);

      const getData = async () => {
            const url = "/data"
            api.get(url)
            .then (response => setGames(response.data))
      }



      useEffect(() => {
            getData()
      }, [])
      return (
            <div className="background">
                  <div className="containerBotao">
                        <h1>Administrar Jogos</h1>
                        <button className="btn" type="button" onClick={() => navigate('/cadastrar')}>
                              <strong>Cadastrar Jogo</strong>
                              <div id="container-stars">
                                    <div id="stars"></div>
                              </div>

                              <div id="glow">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                              </div>
                        </button>
                  </div>
                  <div className="containerGamesAdministrar">
                        {games.map(game => {
                              return (
                                    <ListGamesRow key={game.id}
                                          game={game} />
                              )
                        })}
                  </div>
            </div>
      );
}

export default Administrar;
