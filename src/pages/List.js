import React from 'react'


function List({keywords}) {
    // 0-99
    const idx1 = Math.floor(Math.random() * 100); 
    // 100-199
    const idx2 = Math.floor(Math.random() * 100) + 100;
    // 200-299
    const idx3 = Math.floor(Math.random() * 100) + 200;
    return (
        <>
            <h5> Keywords searched : </h5>
            {keywords.map((word)=>{
                return  word 
            })}
            <ul>
                <li> {} </li>
                <li> {} </li>
                <li> {} </li>
            </ul>
        </>
    )
}

export default List
