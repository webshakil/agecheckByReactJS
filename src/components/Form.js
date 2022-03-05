import React, { useState } from 'react';

const Form=()=> {
    const [name, setName]= useState();
    const [value, setValue] =useState();

const showMessage=()=>{
    if (value>=18){
        window.alert(`Hello ${name}`)
    }else{
        window.alert("Your are too young")
    }
}

  return (
   <div className="mid">
        <form className="form-inline" >
           
            <input type="text"  placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
            
            <input type="number"  placeholder="Enter your age" onChange={(e)=>setValue(e.target.value)} />

            <button type="submit" onClick={showMessage}>Check Age</button>
        </form>

        </div>
    
  )
}

export default Form;