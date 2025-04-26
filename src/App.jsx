import { useState, useEffect } from 'react'
import { URLS } from './URLS'
import Image1 from './assets/image1.png'
import Image2 from './assets/image2.png'
import Image3 from './assets/image3.png'
import Image4 from './assets/image4.png'
import Image5 from './assets/image5.png'
import Image6 from './assets/image6.png'
import Image7 from './assets/image7.png'
import Image8 from './assets/image8.png'
import Image9 from './assets/image9.png'
import Image10 from './assets/image10.png'

const Miembros= ["Kiritokun009", "MadaB20", "Mxrsyi", "srOxmans"]
const images= [Image10, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9]

const animationDuration= 10000;

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, animationDuration);

    return () => clearTimeout(timer);

  }, [currentIndex, images.length]); 

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

      <div className="flex items-center justify-end flex-col h-[98%] w-[60%] flex-grow ml-[5px] mr-[5px] rounded-[10px] overflow-hidden">
          <div className='image-container'>
            <img
              key={currentIndex} // Importante para reiniciar la animación
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`} // Alt text descriptivo
              className="current-image" // Usa tu clase CSS
            />
          </div>
      </div>
    </div>
  )
}

export default App
