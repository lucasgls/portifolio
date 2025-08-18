export function BlogContent() {
  return (
    <section className="space-y-8">
      <div className="max-w-[800px] mx-auto">
        <div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-8 backdrop-blur-xl">
          <div className="text-center space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-[#646cff] to-[#535bf2] flex items-center justify-center">
              <span className="text-2xl">🚧</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">
                Em Desenvolvimento
              </h2>
              
              <p className="text-zinc-400 leading-relaxed max-w-md mx-auto">
                Estou preparando conteúdos incríveis para compartilhar com você! 
                O blog estará disponível em breve com artigos sobre:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 max-w-lg mx-auto">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Desenvolvimento Web
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Tecnologias Frontend
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Experiências Profissionais
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="w-2 h-2 bg-[#646cff] rounded-full"></span>
                  Dicas e Tutoriais
                </div>
              </div>
              
              <p className="text-sm text-zinc-500 mt-6">
                Fique ligado para as novidades! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}