import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { ContactService } from '../services/ContactService'

const AddContact = () => {
  let navigate=useNavigate()
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
    groups:[],
    errorMessage:''
  })

  useEffect(()=>{
newContact()
  },[])
  let newContact=async()=>{
try {
  setState({...state,loading:true})
  let res=await ContactService.getGroup()
  setState({
    ...state,
    loading:false,
    groups:res.data
  })
  
} catch (error) {
  console.log(error)
}
  }


  let updateInput=(event)=>{
setState({
  ...state,
  
    contact:{
      ...state.contact,
      [event.target.name]:event.target.value
    
  }
})
  }


let submitForm=async(event)=>{
  event.preventDefault()
try {
  let res=await ContactService.createContact(state.contact)
  if(res){
    navigate('/',{replace:true})
    console.log(state.contact)
  }
  
} catch (error) {
  setState({
    ...state,
    errorMessage:error.Message
  })
  navigate('/contact/add',{replace:false})
}

}



  let {loading,contact,groups,errorMessage}=state
  console.log(contact)

  return (
    <div style={{marginLeft:"30px"}} >
      <p>{JSON.stringify(contact)}</p>
        <p className="h4 fw-bold">Create Contact</p>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={submitForm}>
              <div className="mb-2">
                <input 
                
                required={true}
                name='name'
                value={contact.name}
                onChange={updateInput}

                type="text" className="form-control" placeholder='Name'/>
                </div>
                <div className="mb-2">
                <input 
                required={true}
                name='photo'
                value={contact.photo}
                onChange={updateInput}
                type="text" className="form-control" placeholder='Photo URL'/>
                </div>
                <div className="mb-2">
                <input 
                required={true}
                name='mobile'
                value={contact.mobile}
                onChange={updateInput}
                type="text" className="form-control" placeholder='Mobile'/>
                </div>
                <div className="mb-2">
                <input 
                required={true}
                name='email'
                value={contact.email}
                onChange={updateInput}type="email" className="form-control" placeholder='Email'/>
                </div>
                <div className="mb-2">
                <input 
                required={true}
                name='company'
                value={contact.company}
                onChange={updateInput}
                type="text" className="form-control" placeholder='Company'/>

                </div>
                <div className="mb-2">
                <input 
                required={true}
                name='title'
                value={contact.title}
                onChange={updateInput}type="text" className="form-control" placeholder='Title'/>

                </div>
                <div className="mb-2">                  
                  <select name="groupId" 
                  
                  value={contact.groupId}
                  onChange={updateInput}
                  className="form-control">
                    <option value="">Select a group</option>
                    {state.groups.map(ele=>{
                      return (<option key ={ele.id} value={ele.id}>{ele.name}</option>)
                    })}
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