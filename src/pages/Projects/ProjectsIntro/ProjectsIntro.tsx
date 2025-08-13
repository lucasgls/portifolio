export function ProjectsIntro() {
  return (
    <section className="mb-8 max-w-[800px] mx-auto">
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-xl transition-all hover:border-zinc-700/50 hover:bg-zinc-900/70 md:p-8">
        <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-[#646cff] to-[#535bf2]" />
        
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#646cff]/20 bg-[#646cff]/10">
            <span className="text-lg text-[#646cff]">📌</span>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-300">
              Nota
            </h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Esses são meus projetos pessoais, desenvolvidos com diferentes tecnologias e abordagens, 
              com o objetivo de demonstrar minhas habilidades e conhecimentos na área de desenvolvimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
