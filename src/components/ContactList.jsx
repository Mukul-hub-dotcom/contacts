import React from 'react'
import { Link } from 'react-router-dom'


const ContactList = () => {
  return (
    <div style={{marginLeft:"30px",marginRight:"30px"}}>
        <p>
          <h4 style={{fontWeight:"bold"}}>Phone Directory

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

            <section className="contact-list" >
              <div className="row d-flex justify-content-between" >
                <div className="col-md-4" style={{marginTop:"20px",padding:'15px',background:"white"}}>
                  <div className="row align-items-center d-flex justify-content-around">
                  <div className="col-md-3">
                    <img className='contact-img' src="data:image/png;base64,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" alt="" />

                  </div>
                  <div className="col-md-7" >
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name: <span className="fw-bold">Mukul</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Mobile: <span className="fw-bold">8168543640</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        mail: <span className="fw-bold">abc@gmail.com</span>
                      </li>
                    </ul>
                    

                  </div>
                  <div className="col-md-1 d-flex flex-column align-items-center">
                    <Link to={'/contact/view/:contactId'} className="btn btn-warning my-1">
                      <i className="fa fa-eye"></i>
                    </Link>
                    <Link to={'/contact/edit/:contactId'} className="btn btn-primary my-1">
                      <i className="fa fa-pen"></i>
                    </Link>
                    <button className="btn btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>


                  </div>
                  
                </div>
                <div className="col-md-4" style={{marginTop:"20px",padding:'15px',background:"white"}}>
                  <div className="row align-items-center d-flex justify-content-around">
                  <div className="col-md-3">
                    <img className='contact-img' src="data:image/png;base64,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" alt="" />

                  </div>
                  <div className="col-md-7" >
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name: <span className="fw-bold">Mukul</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Mobile: <span className="fw-bold">8168543640</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        mail: <span className="fw-bold">abc@gmail.com</span>
                      </li>
                    </ul>
                    

                  </div>
                  <div className="col-md-1 d-flex flex-column align-items-center">
                    <Link to={'/contact/view/:contactId'} className="btn btn-warning my-1">
                      <i className="fa fa-eye"></i>
                    </Link>
                    <Link to={'/contact/edit/:contactId'} className="btn btn-primary my-1">
                      <i className="fa fa-pen"></i>
                    </Link>
                    <button className="btn btn-danger">
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>


                  </div>
                  
                </div>
              </div>
              
            </section>
            
        
    </div>
  )
}

export default ContactList