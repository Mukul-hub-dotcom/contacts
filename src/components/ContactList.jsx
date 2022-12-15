import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ContactService } from '../services/ContactService'
import Spinner from './Spinner'


const ContactList = () => { 
  
 
  const [state,setState]=useState({
    loading:false,
    contacts:[],
    errorMessage:''

  })
  



  useEffect(()=>{
    fetchData()    

  },[])

    const fetchData=async()=>{

    try {
      setState({...state,loading:true})
      const res = await ContactService.getAllContacts();
      setState({
        ...state,
        loading:false,
        contacts:res.data
      })
      
      
    } catch (error) {
      setState({
        ...state,
        loading:false,
        errorMessage:error.Message
      })
      
    }
  }

 
 


  
  return (
    
    <div style={{marginLeft:"30px",marginRight:"30px"}}>
      <div className="h4" style={{fontWeight:"bold"}}>
          Phone Directory

        <Link to='/contact/add' className='btn btn-light ms-4'>
            <i className="fa fa-plus-circle me-1"></i>
            New</Link>
            
            
            <form className='row ' style={{width:"40%",marginTop:"10px"}} >


              <div className="col ">
              <div className="mb-2"><input type="text" className="form-control" placeholder='search Names'/></div>
              </div>
              <div className="col">
              <div className="mb-2"><input type="submit" value={'search'} className="" /></div>
              </div>
                
                
            </form>
            

            </div>
            {
              state.loading?<Spinner/>:
              
            

            <section className="contact-list" >
              <div className="row d-flex justify-content-around" >
                {
                  
                  state.contacts.map(ele=>{return  <div className="col-md-4" style={{marginTop:"20px",padding:'15px',marginRight:"10px",background:"white"}}>
                <div className="row align-items-center ">
                <div className="col-md-3">
                  <img className='contact-img' src={ele.photo} alt="" />

                </div>
                <div className="col-md-7" >
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Name: <span className="fw-bold">{ele.name}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Mobile: <span className="fw-bold">{ele.mobile}</span>
                    </li>
                    <li className="list-group-item list-group-item-action">
                      mail: <span className="fw-bold">{ele.email}</span>
                    </li>
                  </ul>
                  

                </div>
                <div className="col-md-1 d-flex flex-column align-items-center">
                  <Link to={`/contact/view/${ele.id}`} className="btn btn-warning my-1">
                    <i className="fa fa-eye">
                      
                    </i>
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



                  })
                  
                
                
               
}
              </div>
              
            </section>
}
            
        
    </div>
  )
}

export default ContactList