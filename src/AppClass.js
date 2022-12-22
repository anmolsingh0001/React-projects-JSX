import { Component } from "react";
import "./App.css"
// import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  


 render(){
  return (
    <div className='app'>
      <h1>Kalvium gallery</h1>'
      <div className='gallery'>
        {this.props.anmol.map((elt)=>{
          return <img src={elt.img} alt="" />
        })}
      </div>
    </div>
  )
 }
}
