import { URLS } from './URLS'

function App() {

  const Miembros= ["Kiritokun009", "MadaB20", "Mxrsyi", "srOxmans"]

  return (
    <div className='flex items-center justify-center w-[100%] h-[100%]'>

      <div className='w-[30%] h-[98%] rounded-[5px] ml-[5px]'>

        <div className='flex items-center justify-center flex-col bg-[#0000007f] h-[20%] w-[100%] rounded-[10px] mb-[5px]'>
          <p className="winter text-center text-[60px]">U n d e r w o r l d</p>
        </div>

        <div className='bg-[#0000007f] w-[100%] rounded-[10px] mb-[5px]'>
          <p className="winter text-[30px] pl-[20px] pt-[10px]">Miembros</p>
          {Miembros.map((miembro) => (
            <p className="winter text-[20px] pl-[20px] pb-[10px]">⚚ {miembro} ⚚</p>
          ))}
        </div>

      </div>

      <div className="flex items-center justify-end flex-col h-[98%] flex-grow ml-[5px] mr-[5px] rounded-[10px] bg-[url('../assets/unun.png')] imagen-con-degradado-filtro">

        <div className='flex items-center justify-center flex-col bg-[#0000007f] h-[25%] w-[100%] rounded-[10px] z-1'>
          <a href={URLS.SERVER_URL}>
              <button className='winter text-[20px] '>Unete :v</button>
          </a>
        </div>

      </div>
    </div>
  )
}

export default App
