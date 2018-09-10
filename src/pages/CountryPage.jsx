import React from 'react';
/*CountryPage */
import CountryList from "../components/CountryList"
import fetch from "isomorphic-fetch";

const CountryPage = (props) => (
    <div>
        <h2>CountryPage</h2>
        <div>Загрузка списка стран(Json). Промисы. fetch(). Таб стилей с flexbox</div><br/>
        <CountryList />

    </div>
)
export default CountryPage