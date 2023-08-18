import React, { useState } from 'react'
import classes from "./form.module.css"

function Form() {

const [value, setvalue] = useState("")

  const handleRadio = (e) => {
    console.log(e.target.value);
    setvalue(e.target.value);
  }

  return (
    <>
      <div className={classes.container}>
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
            <div className={classes.radio}>
              <input value={"phone"} name='option' type='radio' onChange={handleRadio}></input>
              <label>Phone</label>
              <input value={"email"} name='option' type='radio' onChange={handleRadio}></input>
              <label>Email</label>
            </div>

          </div>

          {value === "phone" ?
          <div className={classes.group}>
            <label htmlFor='phone'>Phone Number</label>
            <input type='number' id='phone' placeholder=''></input>
          </div> : value === "email" ?
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
