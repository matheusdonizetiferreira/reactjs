import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './style.module.css';

const initialValue = {
    title: '',
    image: '',
    price: 0,
    url: '',
};



function Editar() {
    //
    const [values, setValues] = useState(initialValue);

    //
    const navigate = useNavigate();

    const { id } = useParams();

    const url = `/data/${id}`;

    useEffect(() => {
        if (id) {
            api.get(url)
                .then((response) => {
                    setValues(response.data)
                })
        }
    }, [])


    // 
    function onSubmit(evento) {
        evento.preventDefault(); // não executa o comportamento default do form

        api.put(url, values)
            .then(() => {
                navigate('/administrar');
            })
    }

    //
    function onChange(ev) {
        const { name, value } = ev.target
        // console.log({name, value});

        setValues({ ...values, [name]: value })
        // console.log(values);
    }

    return (

        <div className={styles.container}>

            <div className={styles.overlay}></div>

            <div className={styles.main}>
                <h1>Editar Jogo</h1>
                <form onSubmit={onSubmit}>
                    <label htmlFor="nome">
                        Nome do Jogo:
                        <input value={values.title} onChange={onChange} autoComplete='off' type="text" name="title" />
                    </label>

                    <label htmlFor="image">
                        Url da Imagem:
                        <input value={values.image} onChange={onChange} autoComplete='off' type="text" name="image" />
                    </label>

                    <label htmlFor="url">
                        Url do Jogo:
                        <input value={values.url} onChange={onChange} autoComplete='off' type="text" name="url" />
                    </label>

                    <label htmlFor="price">
                        Preço:
                        <input value={values.price} onChange={onChange} autoComplete='off' type="text" name="price" />
                    </label>

                    <div className={styles.wrap}>
                        <button type='submit' className={styles.button}>Salvar Alterações</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Editar;