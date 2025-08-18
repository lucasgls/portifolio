import { MdContentCopy, MdCheck } from "react-icons/md";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "lucasglsilva7@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Falha ao copiar email:', err);
    }
  };

  return (
    <>
      <section className="flex flex-col items-center gap-4 mx-auto mt-6 mb-4 max-w-xs">
        <p className="text-white/70 text-sm tracking-wide text-center">
          Você pode entrar em contato comigo por aqui:
        </p>

        <div className="flex items-center w-full h-12 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-white/6 hover:border-white/12">
          <input
            value={email}
            readOnly
            className="flex-1 bg-transparent px-5 text-white/90 text-sm outline-none border-none tracking-wide selection:bg-white/20"
          />
          <button 
            onClick={handleCopyEmail}
            className="flex items-center justify-center w-12 h-12 hover:text-white/90 active:scale-95 transition-all duration-200"
            title={copied ? "Email copiado!" : "Copiar email"}
          >
            <MdContentCopy className={`w-5 h-5 transition-colors duration-200 ${copied ? 'text-green-400' : ''}`} />
          </button>
        </div>
      </section>
      
      {/* Toast de notificação */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-4 py-3 rounded-lg shadow-lg border border-white/20">
            <MdCheck className="w-5 h-5 text-white" />
            <span className="text-sm font-medium">
              Email copiado!
            </span>
          </div>
        </div>
      )}
    </>
  );
}