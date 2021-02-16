import React from "react"

const vividGreen = "hsl(163, 72%, 41%)"
const hotRed = "hsl(356, 69%, 56%)"

const UpArrow = ()=>{
    return (
        <div style={{fontSize:"10px", color:vividGreen}}>&#9650;</div>
    )
}

const DownArrow = ()=>{
    return (
        <div style={{marginTop:"3px", fontSize:"10px",color:hotRed}}>&#9660;</div >
    )
}

const TrendWidget = ({value, label})=>{
    const color = value>0 ? vividGreen : hotRed
    return(
        <React.Fragment>
            <div style={{display:"flex", justifyContent:"center"}}>
                {value >0 ? <UpArrow/>:<DownArrow/> }
                <p className="font-bold" style={{color, paddingLeft:"5px"}}>{`${Math.abs(value)} ${label}`}</p>
            </div>
        </React.Fragment>
    )
}

export default TrendWidget