import { useState } from 'react'

function App() {
  const [title, setTitle] = useState("title one")
  const[post, setPost] = useState([])
 




  return (
    <>
<div className="container">
  <div className="header">
        <h1>IL MIO BLOG</h1>
  </div>
  <form>
     <input 
       type="text" 
       value={title}
       onChange={e=>{setTitle(e.target.value)}}
       className='form-control'
       placeholder='Inserisci nome post'
       />
       <p> il tuo nome è {title}</p>
   <button className='btn btn-primary m-5'>
        aggiungi
    </button>
  </form>
</div>
    </>
  )
}



export default App
