import React,{useEffect, useState} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import { ContactService } from '../services/ContactService'
import Spinner from './Spinner'

const EditContact = () => {
  let navigate=useNavigate()
  let {contactId}=useParams()
  let [state,setState]=useState({
    loading:false,
    contact:{
      name:'',
      photo:'',
      mobile:'',
      email:'',
      company:'',
      title:'',
      groupId:''


    },
    group:[],
    errorMessage:''

  })

  useEffect(()=>{
edit()
  },[contactId])

  let edit=async ()=>{
    try {
      setState({...state,loading:true})
      let res=await ContactService.getContact(contactId)
      let grpRes=await ContactService.getGroup()
      setState({...state,
        loading:false,
      contact:res.data,
      group:grpRes.data
    })
    } catch (error) {
      setState({...state,
        loading:false,
      errorMessage:error.Message
    })

      
    }
  }
  let updateInput=(e)=>{
    setState({
      ...state,
      contact:{
        ...state.contact,
        [e.target.name]:e.target.value
      }
    })
  }
let submitForm=async(event)=>{
  event.preventDefault()
try {
  let res=await ContactService.updateContact(state.contact,contactId)
  // here contactid is from use params
  if(res){
    navigate('/',{replace:true})
    console.log(state.contact)
  }
  
} catch (error) {
  setState({
    ...state,
    errorMessage:error.Message
  })
  navigate(`/contact/edit/${contactId}`,{replace:false})
}

}


  let {loading,contact,group,errorMessage}=state


  return (
      <div style={{marginLeft:"30px"}} >
        
        <p className="h4 fw-bold text-primary">Edit Contact</p>
        {
          loading?<Spinner/>:
          <div className="row align-items-center">
          <div className="col-md-4">
            <form onSubmit={submitForm}>
              <div className="mb-2">
                <input type="text" 
                required='true'
                name='name'
                onChange={updateInput}
                value={contact.name}
                className="form-control" placeholder='Name'/>
                </div>

                <div className="mb-2">
                <input type="text" 
                required='true'
                name='photo'
                onChange={updateInput}                
                value={contact.photo}
                className="form-control" placeholder='Photo URL'/>
                </div>

                <div className="mb-2">
                <input type="text" 
                required='true'
                name='mobile'
                onChange={updateInput}
                value={contact.mobile}
                className="form-control" placeholder='Mobile'/>
                </div>

                <div className="mb-2">
                <input type="email" 
                required='true'
                name='email'
                onChange={updateInput}
                value={contact.email}
                className="form-control" placeholder='Email'/>
                </div>

                <div className="mb-2">
                <input type="text" 
                required='true'
                name='company'
                onChange={updateInput}
                value={contact.company}
                className="form-control" placeholder='Company'/>
                </div>

                <div className="mb-2">
                <input type="text" 
                required='true'
                name='title'
                onChange={updateInput}
                value={contact.title}
                className="form-control" placeholder='Title'/>
                </div>
                <div className="mb-2">                  
                  <select 
                  name='groupId'
                  value={contact.groupId}
                  onChange={updateInput}
                  id="" className="form-control">
                    <option value="">Select a group</option>
                    {
                      group.map(ele=>{
                        return(
                          <option key ={ele.id} value={ele.id}>{ele.name}</option>
                        )
                      })
                    }
                    </select></div>
                <div className="mb-2">
                <input type="submit" className="btn btn-primary" value='Update'/>
                <Link to='/contact/list' className='btn btn-dark ms-2'>Cancel</Link>
                </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={contact.photo} alt="" className="contact-img" />
          </div>
        </div>
        }
    </div>
  )
}

export default EditContact