import React, {useState} from "react"

const TrafficLight = () => {
    const[color, setColor] = useState(null);

    return(
    <>
    <div class="container top bg-dark d-grid justify-content-center"></div>
    <div class="container semáforo bg-dark d-grid justify-content-center">
        <div style={{boxShadow: color === "red" ? "0px 0px 4px 4px #DDDAAC" : 'none'}}class="red light bg-danger rounded-circle mt-1" onClick={()=> color === "red" ? setColor("none") : setColor("red")}></div>
        <div style={{boxShadow: color === "yellow" ? "0px 0px 5px 5px #DDDAAC" : 'none'}}class="yellow light bg-warning rounded-circle" onClick={()=> color === "yellow" ? setColor("none") :setColor("yellow")}></div>
        <div style={{boxShadow: color === "green" ? "0px 0px 5px 5px #DDDAAC" : 'none'}}class="green light bg-success rounded-circle" onClick={()=> color === "green" ? setColor("none") :setColor("green")}></div>
    </div>
    </>
    )
}

export default TrafficLight;