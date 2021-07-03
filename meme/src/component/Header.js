import React from 'react'
import './meme.css'


function Header() {
  return (
    <header style={style}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjL3yyYnbGBDdzuJn97xvRE0SFsIfgZhfRA&usqp=CAU"
    width='80px'
    height="70px"
    alt="troll face"/>  
    <p>MEME GENERATOR</p>
    </header>
  )
}

const style={
    color:'white',
    backgroundColor: '#29539b',
backgroundImage:' linear-gradient(315deg, #29539b 0%, #1e3b70 74%)',    
}

export default Header
