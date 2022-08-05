import React from "react";

function PlanetsDbInfo ({result}){

    return <div id={result.id}>
        <h1>{result.name}</h1>
        {/* <h6>{result.imgSrc}</h6> */}
        <p>{result.description}</p>
    </div>
    
}
    

export default PlanetsDbInfo;
