import React from "react";


function Categories({ items, onClickItem }) {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    items.map((name, index) => {
                        return <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>{name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Categories