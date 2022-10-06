import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div  className='contact-form'>
      <h1>CONTACT FORM</h1>
        <form className='form-input'>
            <label>NAME</label>
            <input type='text'   className='inputFile-text' placeholder='Enter your full names here...' />
            <label>EMAIL</label>
            <input  type='email'  className='inputFile-text'  placeholder='Enter your email here...' />
            <label>MESSAGE</label>
            <textarea  type='text'  className='inputFile-textarea' rows='5' placeholder='Give your feedback here...'>

            </textarea>
            <button type='submit'  value='send' className='botton-submit'>SEND</button>
        </form>
    
    </div>
  )
}

export default Contact