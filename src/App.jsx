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
    
  }
  return (
   <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert/>}
      <h3>grocery buddy</h3>
      <div className="form-control">
        <input type="text" className='grocery' 
        placeholder='eggs' value={name} onChange={(e) => setName(e.target.value)} />
        <button className='submit-btn' type='submit'>
          {isEditing? 'edit' : 'submit'}
        </button>
      </div>
    </form>
    <div className="grocery-container">
      <List/>
      <button className="clear-btn">
        clear items
      </button>
    </div>
   </section>
  )
}

export default App
