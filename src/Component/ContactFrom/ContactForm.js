import React from 'react'
import "./ContactForm.css";
const ContactForm = () => {
    return (
        <>
            <div className="contact-Form">
                <div className="deatiles">
                    <div className="name">
                        <input type="text" className='First-name' placeholder='Enter Your First Name' />
                        <input type="text" className='Second-name' placeholder='Enter Your Second Name' />
                        <input type="text" className='Last-name' placeholder='Enter Your Last Name' />

                    </div>
                    <div className="text-area">
                        <textarea name="Enter-Your-queary" placeholder='Entery Your Query' id="" cols="30" rows="10"></textarea>

                    </div>
                    <div className="Form-btn">
                        <button>Submit</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ContactForm