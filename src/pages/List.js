import React from 'react'


function List({keywords}) {
    return (
        <>
            <h5> Keywords searched : </h5>
            {keywords.map((word)=>{
                return  word 
            })}
        </>
    )
}

export default List
