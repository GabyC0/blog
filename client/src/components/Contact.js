import React from 'react'

export const Contact = () => {
  return (
      <div>
          <h1>Get in touch</h1>
    <div className='contactMe'>
        <form>
        <h2>Contact Me</h2>
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


    <div class="subscribe">
        <form >      
            <div>
                <h2>Subscribe to our Newsletter</h2>
                <p>Lorem ipsum text about why you should subscribe to our newsletter blabla. Lorem ipsum text about why you should subscribe to our newsletter blabla.</p>
            </div>
            <fieldset>
                <div class="container">
                    <input type="text" placeholder="Name" name="name" required/>
                    <br/>
                    <input type="text" placeholder="Email address" name="mail" required/>
                </div>

                <div class="container">
                    <input type="submit" value="Subscribe"/>
                </div>
            </fieldset>
        </form>

            </div>
    </div>

  )
}
