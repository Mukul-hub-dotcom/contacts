import React, { useEffect,useState } from 'react'
import { ContactService } from '../services/ContactService'
import { Link,useParams } from 'react-router-dom'
import Spinner from './Spinner'

const ViewContact = () => {
  let {contactId}=useParams()
  

  const [state,setState]=useState({
    loading:false,
    contacts:{},
    errorMessage:''


  })

  useEffect(()=>{
    
fetchData()


  },[])

  const fetchData=async()=>{
    try {
      setState({...state,loading:true})
      let res=await ContactService.getContact(contactId)
      let groupName=await ContactService.getGroupName(res.data)
      // console.log(res.data)
      setState({
        ...state,
        loading:false,
        contacts:res.data,
        group:groupName.data.name
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
    <div style={{marginLeft:'30px'}}>   

      <p className="h4 fw-bold text-primary">
        View Contact
      </p>

      {
        state.loading?<Spinner/>:
        
        
      
      <section className="view-contact mt-15">
        
        <div className="col-md-4 ">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img className='contact-img' src={state.contacts.photo} alt="" />
          </div>
          <div className="col-md-8">
          <ul className="list-group">
                      <li className="list-group-item list-group-item-action">
                        Name: <span className="fw-bold">{state.contacts.name}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Mobile: <span className="fw-bold">{state.contacts.mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        mail: <span className="fw-bold">{state.contacts.email}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        company: <span className="fw-bold">{state.contacts.company}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        Title: <span className="fw-bold">{state.contacts.title}</span>
                      </li>
                      <li className="list-group-item list-group-item-action">
                        group: <span className="fw-bold">{state.group}</span>
                      </li>
                    </ul>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to='/contact/list' className='btn btn-warning'>Back</Link>
          </div>
        </div>

      </section>
}
    </div>
  )
}

export default ViewContact