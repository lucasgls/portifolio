import { Copy } from 'lucide-react'

export function ContactSection() {
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
          <Copy />
        </button>
      </div>
    </div>
  )
}