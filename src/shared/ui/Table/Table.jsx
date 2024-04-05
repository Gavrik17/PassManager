import React from "react";
import Header from "./Header/Header";
import Row from "./Row/Row";


const Rows = ({ items }) => {
    
    return (
        items.map(item => <Row item={item}/>)
    )
}

export const Table = ({ list }) => {
    return (
        <table>
            <Header header={list.header}/>
            <Rows items={list.items}/>
        </table>

    )
}
