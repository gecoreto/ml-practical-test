'use strict' // palabra reservada que nos permite usar las Funciones de ES6

const express = require('express');
const axios = require('axios');

const api = express.Router();
const { mapItemsOfSearch, mapMercadolibreItem } = require('./helpers/map-response');

api.get('/items', (req, res) => {
    if (!!!req.query.q) {
        return res.status(400).send('El parametro de busqueda es obligatorio.')
    }
    const { q } = req.query;
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}`)
        .then(response => {
            return res.status(200)
                .send(mapItemsOfSearch(response.data));
        })
        .catch(error => {
            console.log(error);
            const myError = error.isAxiosError ? error.toJSON().message : 'Error desconocido';
            return res.status(500)
                .send({ error: myError });
        });
});

api.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const url = `https://api.mercadolibre.com/items/${id}`;
    axios.all([
        axios.get(url),
        axios.get(url + '/description')
    ])
        .then(axios.spread(({ data }, { data: { plain_text } }) => {
            return res.status(200)
                .send({
                    author: {
                        name: "David Javier",
                        lastname: "Garzon"
                    },
                    item: {
                        ...mapMercadolibreItem(data),
                        hello: 'moto',
                        sold_quantity: data.sold_quantity,
                        description: plain_text
                    }
                });
        }))
        .catch(error => {
            console.log(error);
            const myError = error.isAxiosError ? error.toJSON().message : 'Error desconocido';
            return res.status(500)
                .send({ error: myError });
        });
});

module.exports = api;