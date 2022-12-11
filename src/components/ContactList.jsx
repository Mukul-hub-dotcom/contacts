import React from 'react'
import { Link } from 'react-router-dom'


const ContactList = () => {
  return (
    <div style={{marginLeft:"10px"}}>
        <p>
          <h4>Phone Directory

        <Link to='/contact/add' className='btn btn-light ms-4'>
            <i className="fa fa-plus-circle me-1"></i>
            New</Link>
</h4>
            
            </p>
            <form className='row' style={{width:"40%"}} >
              <div className="col">
              <div className="mb-2"><input type="text" className="form-control" placeholder='search Names'/></div>
              </div>
              <div className="col">
              <div className="mb-2"><input type="submit" className="" /></div>
              </div>
                
                
            </form>

            <section className="contact-list">
              <div className="row">
                
              </div>
            </section>
        
    </div>
  )
}

export default ContactList