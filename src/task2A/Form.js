import React, { useState } from 'react'
import classes from "./form.module.css"

function Form() {

  const[val, setVal] = useState("");

  const handleSelect=(e) =>{
    console.log(e.target.value);
    setVal(e.target.value);
  }

  return (
    <>
      <div className={classes.container }>
        <div className={classes.row1}>
          <div className={classes.group}>
            <label htmlFor='firstName'>First Name</label>
            <input id='firstName' placeholder=''></input>
          </div>
          <div className={classes.group}>
            <label htmlFor='lastName'>Last Name</label>
            <input id='lastName' placeholder=''></input>
          </div>
        </div>
        <div className={classes.row2}>
          <div className={classes.group}>
            <label htmlFor='contactType' id='contactType'>How should we contact you ?</label>
            
            <select id='contactType' placeholder='' onChange={handleSelect}>
              <option>Choose Option</option>
              <option value={"phone"}>Phone</option>
              <option value={"email"}>Email</option>
            </select>
            
          </div>

          {val === "phone"?
          <div className={classes.group}>
            <label htmlFor='phone'>Phone Number</label>
            <input type='number' id='phone' placeholder=''></input>
          </div>: val === "email"?
          <div className={classes.group}>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' placeholder=''></input>
          </div> : null}
        </div>
      </div>
    </>
  )
}

export default Form
