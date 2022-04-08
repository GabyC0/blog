import React from 'react'

export const Contact = () => {
  return (
    <div className='contactMe'>
        
        <form>
        <h1>Contact Me</h1>
        <fieldset>
            <label>First Name</label>
            <input type="text" id="firstname" name="firstname" placeholder='Your name...'/>
            <br/>
            <lable>Last Name</lable>
            <input type="text" id="lastname" name="lastname" placeholder="Your last name..."/>
            <br/>
            <lable>Message</lable>
            <br/>
            <textarea id="message" name="message" placeholder="Your message here..." style={{height:'200px', width:'400px'}}></textarea>
            <br/>

            <input type="Submit" value="Send Message"/>
        </fieldset>

        </form>
    </div>
  )
}
