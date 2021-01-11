'use strict'

function mapItemsOfSearch(body) {
    const { results, filters } = body;

    return {
        author: {
            name: "David Javier",
            lastname: "Garzon"
        },
        categories:
            (filters.length > 0)
                ? filters.find((cat) => cat.id === 'category')
                    .values
                    .reduce(
                        (prev, { path_from_root }) => [...path_from_root.map(({ name }) => name)],
                        []
                    )
                : [],
        items: results.map((item) => mapMercadolibreItem(item))
    };
}

function mapMercadolibreItem(body) {
    const {
        id, title, price, thumbnail,
        condition, shipping: { free_shipping }, currency_id, address, pictures
    } = body;

    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: null
        },
        picture: (!!pictures) ? pictures[0].secure_url : thumbnail,
        condition: condition === 'new' ? 'Nuevo' : 'Usado',
        free_shipping,
        city_name: (!!address) ? address.city_name : null
    };
}

module.exports = { mapItemsOfSearch, mapMercadolibreItem }