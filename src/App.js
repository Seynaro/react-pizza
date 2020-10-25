import React from 'react';
import './scss/app.scss';
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {setPizzasAC} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/db.json').then(({data}) => {
                dispatch(setPizzasAC(data.pizzas));
            })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' component={Home} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
        </div>
    );
}

export default App;
