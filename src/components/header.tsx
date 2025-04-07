import lucasLogo from 'src/assets/icon-face-whiteBG.png'

export function Header () {
    const logo = lucasLogo;  
    return(
    <div className="header">
        <div>
            <a href="https://www.linkedin.com/in/lucasgls/" target="_blank">
                <img src={logo} className="logo" alt="Vite logo"/>
            </a>
        </div>

        <div>
            <h1>Lucas Gabriel Lima Silva</h1>
            <p>Estudante de Engenharia de Software</p>
            <p> <u>BackEnd</u> | .NET | C# | ASP.NET Core</p>
        </div>

        <div className='socials-buttons-header'>
        
            <div>
                <button >Projetos</button>
                <button >Tecnologias</button>
            </div>

            <div>
                <button >Estudos</button>
                <button >Biografia</button>
            </div>
        
        </div>
    </div>
    )
}