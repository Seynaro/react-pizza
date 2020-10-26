import React from 'react';
import './scss/app.scss';
import {Header} from "./components";
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {fetchPizzas} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch();

    React.useEffect(() => {
        fetchPizzas()
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
