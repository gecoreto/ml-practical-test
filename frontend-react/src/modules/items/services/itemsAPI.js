import axios from "axios";

export const SERVER = 'http://localhost:8080/api/items'

// A mock function to mimic making an async request for data
export async function fetchProducts(query) {
  const url = SERVER + `?q=${query}`;
  const { data } = await axios.get(url);
  const { items, categories } = data;
  return ({
    data: {
      items: items.filter((prod, i) => i < 4),
      categories,
    }
  })
}

export async function fetchProductDetailById(id) {
  const url = SERVER + `/${id}`;
  const { data } = await axios.get(url);
  const { item: product } = data;
  return {
    product
  }
}
