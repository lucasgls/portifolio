import { MdContentCopy } from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center gap-4 mx-auto mt-6 mb-4 max-w-xs">
      <p className="text-white/70 text-sm tracking-wide text-center">
        Você pode entrar em contato comigo por aqui:
      </p>

      <div className="flex items-center w-full h-12 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-white/6 hover:border-white/12">
        <input
          value="lucasglsilva7@gmail.com"
          readOnly
          className="flex-1 bg-transparent px-5 text-white/90 text-sm outline-none border-none tracking-wide selection:bg-white/20"
        />
        <button className="flex items-center justify-center w-12 h-12 hover:text-white/90 active:scale-95">
          <MdContentCopy className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}