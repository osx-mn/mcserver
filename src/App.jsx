import maicrafondo from './assets/maicrafondo.png'

function App() {

  return (
    <div className='container full column fondo' style={{ backgroundImage: `url(${maicrafondo})` }}>
      <div className='container column bg-[#0000007f] h-[35%] w-[50%] rounded-[10px]'>
        <p className="winter text-center text-[30px]">Ponganle nombre a esta madre 🗣️</p>
        <a href="minecraft://?addExternalServer=CERBER|15.235.118.68:2675">
          <button className='winter text-[20px]'>Unete :v</button>
        </a>
      </div>
    </div>
  )
}

export default App
