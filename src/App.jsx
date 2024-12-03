import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="container">
  <div className="header">
        <h1>IL MIO BLOG</h1>
  </div>
  <form>
     <input 
       type="text" 
       className='form-control'
       />
   <button className='btn btn-primary m-5'>
        aggiungi
    </button>
  </form>
      †
</div>
    </>
  )
}

export default App
