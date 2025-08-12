import { FaCopy } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <div className='container-copy'>
      <p>Você pode entrar em contato comigo por aqui:</p>
      <div className='copyDiv'>
        <input 
          value="lucasglsilva7@gmail.com"
          className="copyInput"
          name='text'
          type="text" 
          readOnly
        />
        <button className='copyButton'>
          <FaCopy />
        </button>
      </div>
    </div>
  )
}