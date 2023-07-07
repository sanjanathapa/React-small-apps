import React, { useState } from 'react'
import './SearchBox.css'

const SearchBox = ({onSubmit}) => {
  const [term, setTerm] = useState('');
  
  const handleFormSubmit =(event)=>{
    console.log(event, "-----this is the event-----")
      event.preventDefault();

      onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }
    
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter the term</label>
      <input value= {term} onChange={handleChange}/>
      </form>
     
    </div>
  )
}

export default SearchBox

//xvQrA-yj-cU_oQOeiuxsWuz6aTcpschLCkbHilUYIuk
//4XLRQGVWcQdToWxfPW63akr-frOeaJdmVRbnOFeQFno   secret key


//HANDLING Text inputs
//1. create a new piece of state.
//2.create an event handler to watch for the 'onChange'  event.
//3.when the 'onChange' event fires, get the value from the input
//4.take that value from the input and use it to update yuor state.
//5.pass your state to the input as the value prop.