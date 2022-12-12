import React from 'react'
import { Link } from 'react-router-dom'

const AddContact = () => {
  return (
    <div style={{marginLeft:"30px"}} >
        <p className="h4 fw-bold">Create Contact</p>
        <div className="row">
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
                <input type="submit" className="btn btn-success" value={'Create'}/>
                <Link to='/contact/list' className='btn btn-dark ms-2'>Cancel</Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AddContact