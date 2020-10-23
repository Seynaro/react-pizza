import {Categories, PizzaBlock, SortPopup} from "../components";
import React from "react";
import {useSelector} from "react-redux";


function Home() {

    const items = useSelector(state => state.pizzasReducer.items);

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={[
                    'Мясные',
                    'Вегетарианская',
                    'Гриль',
                    'Острые',
                    'Закрытые',
                ]}/>
                <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map(obj => <PizzaBlock {...obj}
                    key={obj.id}/>)
                }
            </div>
        </div>
    )
}

export default Home