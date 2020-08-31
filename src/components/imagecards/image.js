import React from 'react'
import './style.css'
const ImageCard = (props) =>{
    const myfucn = (event) =>{
        props.WhenClicked(props.id)
    }

    return (
       <div>
        <img  src={props.currentAddress}
        
        
        />
        <button  className="btn" value ={props.id} onClick={myfucn}><i className="fa fa-trash fa-2x" aria-hidden="true"></i></button>
        </div>
    )
}
export default ImageCard