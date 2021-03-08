import Ex03ProductListItem from './ex03ProductListItem';
import React from "react";
import style from './ex03ProductList.module.css'
const Ex03ProductList = (props) => {
    const artilces =  props.products.map(
        p => <Ex03ProductListItem key={p.id} {...p} />
    )

    return (
        <div className={style.containerFlex}>
            {artilces}
        </div>
    )
}

export default Ex03ProductList;
