import React from 'react';
import ImageCard from '../imagecards/image.js'
import './style.css'

class Gallery extends React.Component{
constructor(props){
    super(props);
    this.state={
        images:[],
        currentAddress:"",
    }
}
onaddressChange= (event) => {
  this.setState({
      currentAddress:event.target.value
  })
}
componentDidMount() {
    const rememberMe = JSON.parse(localStorage.getItem("IMGS"));
    
    this.setState({ 
        images: rememberMe });
  }
onaddimage= (event) =>{
    const n = [...this.state.images]

    n.push(this.state.currentAddress)
    localStorage.setItem("IMGS" , JSON.stringify(n));
    this.setState({
          images:n,
          currentAddress:"",

    })
   
}

render = () => {

    return(
       
        <div className="root-container">
          <p className="title">
              ......Image Gallery......
          </p>
          <div className="input-box">
              <input onChange={this.onaddressChange} value={this.state.currentAddress} type="text" placeholder="Enter Image Url">
              </input>
              <button onClick={this.onaddimage} className="add-btn">Add</button>
          </div>
          <div className="cards">
               {
               this.state.images.map((b)=>{
                 return <ImageCard 
                 key={`${b}-${Math.random() * 10}`}
                 currentAddress={b} 
                 
                  
                 />
               })
               }
            </div>
        </div>
        
    )
}


}

export default Gallery