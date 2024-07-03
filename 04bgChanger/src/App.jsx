import { useState } from 'react'


function App() {
  const [bgColor, setBgColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:bgColor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setBgColor('red')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Red"}}>Red
          </button>
          <button onClick={() => setBgColor('Orange')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Orange"}}>Orange
          </button>
          <button onClick={() => setBgColor('Green')}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Green"}}>Green
          </button>
          <button onClick={() => setBgColor('Purple')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Purple"}}>Purple
          </button>
          <button onClick={() => setBgColor('Blue')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"Blue"}}>Blue
          </button>
          <button onClick={() => setBgColor('black')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"black"}}>black
          </button>
          <button onClick={() => setBgColor('Pink')}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"pink"}}>Pink
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
