
import React from 'react';
import './App.css'
import ClassCounter from './Components/ClassCounter'
import FunctionalCounter from './Components/FunctionalCounter'

function App() {
  return (
<>
       <h1>Assignment-2 Counter Application</h1>
    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'lightblue', padding: '1rem', borderRadius: '8px' }}>
        <ClassCounter />
      </div>
      <div style={{ backgroundColor: 'lightgreen', padding: '1rem', borderRadius: '8px' }}>
        <FunctionalCounter />
      </div>
    </div>
    </>
  )
}

export default App
