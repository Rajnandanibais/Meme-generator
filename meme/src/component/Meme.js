import React, { Component } from 'react'
import './meme.css'

class Meme extends Component {
    constructor(){
        super()
        this.state = {
            topText:"",
            bottomText:"",
            randomImg:"https://i.insider.com/5abb9e6a3216741c008b462d?width=1000&format=jpeg&auto=webp", //random img using api
            allMemeImgs : []
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    //establich conect betw our app and api through didmount
componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response =>response.json())
    .then(response=>{
        const {memes}= response.data
        this.setState({allMemeImgs: memes})
    }
        )
}
handleChange(event){
    const{name, value}= event.target
    this.setState({[name]:value})
}
handleSubmit(event){
    event.preventDefault()
    const randNum= Math.floor(Math.random() * this.state.allMemeImgs.length)  //it will gen one random img
    const randMemeImg=this.state.allMemeImgs[randNum].url
    this.setState({randomImg : randMemeImg})
}

  render() {
    return (
      <div>
<form  className="meme" >
     <input type='text'
       name='topText'
       placeholder='Top Text'
       value={this.state.topText}
       onChange={this.handleChange}
       />
   <input type='text'
         name='bottomText'
         placeholder="Bottom Text"
         value={this.state.bottomText}
         onChange={this.handleChange}
         />
<button type="submit" onClick={this.handleSubmit}>GENERATOR</button>
</form>        

<div className="container">
<img src={this.state.randomImg} alt=""/>
<h2 className="top">{this.state.topText}</h2>
<h2 className="bottom">{this.state.bottomText}</h2>
</div>
      </div>
    )
  }
}

export default Meme;
