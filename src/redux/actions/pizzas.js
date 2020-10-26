import axios from "axios";

export const fetchPizzas = () => {
    axios.get('http://localhost:3001/db.json').then(({data}) => {
        (setPizzasAC(data));
    })
}

export const setPizzasAC = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
});