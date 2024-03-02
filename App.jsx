import React, { useState } from 'react'
import './App.css'


function App() {

const [num1,setNum1]=useState(0);  
const [num2,setNum2]=useState(0);  
const [Add,setAdd]  =useState("");
const calcSum = (e)=>{
e.preventDefault()
 
if(num1===0 || num2===0){
  alert("Plz Enter A Number")
}
else{
  let Add = parseInt(num1)+parseInt(num2)
  setAdd(parseInt(Add))
}


}

  return (
    <div className='app'>
      <div className="container">
        <h2 className="center">Sum Calculator</h2>
        <form onSubmit={calcSum} >
          <div>
            <label>Number 1</label>
            <input type="text" placeholder='Enter  Number 1 value' value={num1} onChange={(e)=>setNum1(e.target.value)} />
          </div>
          <div>
            <label>Number 2</label>
            <input type="text" placeholder='Enter  Number 2 value'  value={num2} onChange={(e)=>setNum2(e.target.value)}/>
          </div>
          <div>
            <button className="btn" type='submit'>Submit</button>
          </div>       
            <div className="center">
              <h3>Your sum is:{Add}</h3>
            </div>
        </form>
      </div>
    </div>
  )
}

export default App