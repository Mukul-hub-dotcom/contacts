import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
      <div style={{marginLeft:"30px"}} >
        <p className="h4 fw-bold text-primary">Edit Contact</p>
        <div className="row align-items-center">
          <div className="col-md-4">
            <form action="">
              <div className="mb-2">
                <input type="text" className="form-control" placeholder='Name'/>
                </div>
                <div className="mb-2">
                <input type="text" className="form-control" placeholder='Photo URL'/>
                </div>
                <div className="mb-2">
                <input type="text" className="form-control" placeholder='Mobile'/>
                </div>
                <div className="mb-2">
                <input type="email" className="form-control" placeholder='Email'/>
                </div>
                <div className="mb-2">
                <input type="text" className="form-control" placeholder='Company'/>
                </div>
                <div className="mb-2">
                <input type="text" className="form-control" placeholder='Title'/>
                </div>
                <div className="mb-2">                  
                  <select name="" id="" className="form-control">
                    <option value="">Select a group</option>
                    </select></div>
                <div className="mb-2">
                <input type="submit" className="btn btn-primary" value='Update'/>
                <Link to='/contact/list' className='btn btn-dark ms-2'>Cancel</Link>
                </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src="https://thumbs.dreamstime.com/b/telephone-icon-vector-male-user-person-profile-avatar-phone-symbol-business-contact-communication-flat-color-glyph-145875162.jpg" alt="" className="contact-img" />
          </div>
        </div>
    </div>
  )
}

export default EditContact