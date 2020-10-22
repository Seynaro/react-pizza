import React from 'react';
import './scss/app.scss';
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {setPizzasAC} from "./redux/actions/pizzas";


function App() {

    const dispatch = useDispatch();
    const {items} = useSelector(({ state }) => {
        return {
            items: state.pizzas.items,
            sortBy: state.filters.sortBy,
        }
    })

    /*const state = useSelector(({ pizzas, filters }) => {
        return {
            items: pizzas.items,
            sortBy: filters.sortBy,
        }
    })*/

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                dispatch(setPizzasAC(data.pizzas))
            })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home items={items}/>} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
