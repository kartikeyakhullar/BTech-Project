import React from 'react'


function List({keywords,result}) {
    const final = result["hits"].hits;
    console.log(final);
    return (
        <div>
            <h5> Keywords searched : </h5>
            {keywords.map((word)=>{
                return  word 
            })}
            <>
                {
                    final.map((element,index)=>{
                        return (
                            <div key={index}>
                                <p>{element._source.abstract}</p>
                                <p>{element._source.url}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </>
        </div>
    )
}

export default List
