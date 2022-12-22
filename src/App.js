// import { render } from '@testing-library/react';s
import './App.css';


function App({anmol}) {
  console.log(anmol)
  return (
    <div className='app'>
      <h1>Kalvium Gallary</h1>'
      <div className='gallery'>
        {anmol.map((elt)=>{
          return <img src={elt.img} alt="" />
        })}
      </div>
    </div>
  )
  

}

export default App;
