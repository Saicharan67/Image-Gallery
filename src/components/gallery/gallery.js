import React from 'react';
import ImageCard from '../imagecards/image.js'
import './style.css'

class Gallery extends React.Component{
constructor(props){
    super(props);
    
    this.rememberMe =  JSON.parse(localStorage.getItem("IMGS"));
    if (this.rememberMe){
        this.state={
            images:this.rememberMe,
            currentAddress:"",
            count:this.rememberMe.length
        }
    }
    else{
        this.state={
            images:[],
            currentAddress:"",
            count:0

        }
    }
}
onaddressChange= (event) => {
  this.setState({
      currentAddress:event.target.value
  })
}

onaddimage= (event) =>{
    const n = [...this.state.images]
    const vir = this.state.count
    n.push(this.state.currentAddress)
    localStorage.setItem("IMGS" , JSON.stringify(n));
    this.setState({
          images:n,
          currentAddress:"",
          count:vir+1

    })
   
}
Ondelete = (ide) =>{
    let vt = [...this.state.images]
    console.log(ide)
    vt.splice(ide,1)
    this.setState({
       images:vt
    });
      
      localStorage.setItem("IMGS" , JSON.stringify(vt));

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
               this.state.images.map((b,index)=>{
                 return < ImageCard 
                 key={Math.random()*100}
                 id={index}
                 currentAddress={b} 
                 WhenClicked={this.Ondelete}
                  
                 />
               })
               }
            </div>
        </div>
        
    )
}


}

export default Gallery