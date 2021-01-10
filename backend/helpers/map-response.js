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
                    .map(
                        ({ path_from_root }) => path_from_root.map(({ name }) => name)
                    )
                : [],
        items: results.map((item) => mapMercadolibreItem(item))
    };
}

function mapMercadolibreItem(body) {
    const { id, title, price, thumbnail, condition, shipping: { free_shipping }, currency_id } = body;
    return {
        id,
        title,
        price: {
            currency: currency_id,
            amount: price,
            decimals: null
        },
        picture: thumbnail,
        condition,
        free_shipping
    };
}

module.exports = { mapItemsOfSearch, mapMercadolibreItem }