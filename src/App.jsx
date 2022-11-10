import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:'', type:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      // display alert
      showAlert(true, 'Please Enter Item', 'danger' )
    }
    else if(name && isEditing){
      //deal with edit
    }
    else {
      //show alert
      const newItem = {id: new Date().getTime.toString(), title:name}
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show=false, msg='', type='') => {
    setAlert({show, msg, type})
  }

  return (
   <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert = {showAlert} />}
      <h3>grocery buddy</h3>
      <div className="form-control">
        <input type="text" className='grocery' 
        placeholder='eggs' value={name} onChange={(e) => setName(e.target.value)} />
        <button className='submit-btn' type='submit'>
          {isEditing? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    {list.length > 0 &&
    <div className="grocery-container">
    <List items={list}/>
    <button className="clear-btn">
      clear items
    </button>
  </div>
    }
    
   </section>
  )
}

export default App
