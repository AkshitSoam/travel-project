import React from 'react'
import './ContactPage.css';

function ContactPage() {
  return (
    <div className='ContactPage top'>
        <div className='ContactPage-container'>
          <div className='ContactPage-content'>
            <div className='Contact-page-img'><h1>Contact Us</h1></div>
            
            <form className='form'>
                <input type='text' placeholder='Enter your first name'/>
                <input type='text' placeholder='Enter your last name'/>
                <input type='text' placeholder='Enter your meassage'/>
                <button>
                  Submit
                </button>

            </form>
          </div>
        </div>
    </div>
  )
}

export default ContactPage