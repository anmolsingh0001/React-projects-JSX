import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

 render(){
  return (
    <div className='app'>
      <h1>Kalvium gallery</h1>'
      <div className='gallery'>
        {this.imageData().map((elt)=>{
          return <img src={elt.img} alt="" />
        })}
      </div>
    </div>
  )
 }
}
