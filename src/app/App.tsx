import { Square, Circle, Triangle, Github, Linkedin, Mail } from 'lucide-react';
import guaravivoLogo from '../imports/Logo_Fonte_Clara-1.png';
import fotoAna from '../imports/foto_ana.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation - Bauhaus Style */}
      <header className="fixed top-0 w-full bg-black text-white z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5 items-center">
                <div className="w-4 h-4 bg-red-600"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-yellow-400"></div>
              </div>
              <span className="font-bold text-xl tracking-tight uppercase">
                BAUHAUS
              </span>
            </div>
            <div className="hidden md:flex gap-10">
              <a href="#about" className="hover:text-red-600 transition uppercase text-sm tracking-wide">Sobre</a>
              <a href="#team" className="hover:text-blue-600 transition uppercase text-sm tracking-wide">Equipe</a>
              <a href="#project" className="hover:text-yellow-400 transition uppercase text-sm tracking-wide">Projeto</a>
              <a href="#tech" className="hover:text-red-600 transition uppercase text-sm tracking-wide">Tech</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section - Bauhaus Minimal */}
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="inline-block px-3 py-1 bg-yellow-400 text-black font-bold mb-6 uppercase text-xs tracking-wider">
                Forma segue função
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black uppercase leading-none">
                Tecnologia
                <br />
                <span className="text-red-600">Sustentável</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Design funcional e inovação comprometidos com meio ambiente e sustentabilidade
              </p>
              <a
                href="#project"
                className="inline-block px-8 py-3 bg-black text-white hover:bg-red-600 transition uppercase text-xs tracking-wide font-bold"
              >
                Ver Projeto
              </a>
            </div>
            <div className="md:col-span-5">
              <div className="relative h-80">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600"></div>
                <div className="absolute top-16 right-24 w-24 h-24 bg-blue-600 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Bauhaus Primary Shapes */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-black uppercase tracking-tight">Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border-2 border-black">
              <div className="w-12 h-12 bg-red-600 mb-6"></div>
              <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">Meio Ambiente</h3>
              <p className="leading-relaxed text-gray-700 text-sm">
                Preservação ambiental e desenvolvimento sustentável através de soluções tecnológicas responsáveis
              </p>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <div className="w-12 h-12 bg-blue-600 rounded-full mb-6"></div>
              <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">Tecnologia</h3>
              <p className="leading-relaxed text-gray-700 text-sm">
                Ferramentas e metodologias modernas para criar soluções robustas e eficientes
              </p>
            </div>
            <div className="bg-white p-8 border-2 border-black">
              <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] border-b-yellow-400 mb-6"></div>
              <h3 className="font-bold text-xl mb-3 uppercase tracking-tight">Sustentabilidade</h3>
              <p className="leading-relaxed text-gray-700 text-sm">
                Impacto positivo de longo prazo com práticas responsáveis e conscientes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Bauhaus Grid */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-black uppercase tracking-tight">Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-0 flex flex-col items-center justify-center relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center border-2 border-black"
                  style={{ backgroundImage: `url(${fotoAna ?? '/src/imports/foto_ana.png'})` }}
                />
                <img src={fotoAna ?? '/src/imports/foto_ana.png'} alt="Ana Flávia Vieira Kunzendorff" className="sr-only" />
              </div>
            <div className="md:col-span-2 bg-white p-10 border-2 border-black">
              <h3 className="font-bold text-2xl mb-2 text-black uppercase tracking-tight">
                Ana Flávia Vieira Kunzendorff
              </h3>
              <p className="text-blue-600 font-bold mb-6 uppercase text-xs tracking-wider">
                Desenvolvedora & Líder de Projeto
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-sm">
                Especialista em desenvolvimento de soluções tecnológicas sustentáveis, com foco em criar impacto positivo através da inovação e boas práticas de engenharia de software.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/akunzendorff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black flex items-center justify-center hover:bg-red-600 transition"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/akunzendorff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="mailto:kunzendorffana@gmail.com"
                  className="w-10 h-10 bg-black flex items-center justify-center hover:bg-yellow-400 transition group"
                >
                  <Mail className="w-5 h-5 text-white group-hover:text-black" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section - Guarávivo Identity */}
      <section id="project" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          {/* Logo Centralizada */}
          <div className="flex justify-center mb-12">
            <img
              src={guaravivoLogo}
              alt="Guarávivo"
              className="w-full max-w-md"
            />
          </div>

          {/* Sobre o Projeto */}
          <div className="bg-white p-8 mb-12">
            <h3 className="font-bold text-2xl mb-4 text-[#F2201F] uppercase tracking-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Sobre o Projeto
            </h3>
            <p className="leading-relaxed text-sm text-gray-700 mb-4">
              Sistema de auxílio ao monitoramento e proteção do Guará, desenvolvido para registro de informações essenciais através de aplicativo mobile.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#F2201F] font-bold">•</span>
                <span>Registro de tamanho do bando e quantidade de indivíduos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F2201F] font-bold">•</span>
                <span>Geolocalização precisa do guará com medição de distância</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F2201F] font-bold">•</span>
                <span>Monitoramento de comportamento (cio, ninhar)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F2201F] font-bold">•</span>
                <span>Registro fotográfico com data e hora</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F2201F] font-bold">•</span>
                <span>Geração de mapas de áreas de alimentação, ninhos e rotas de voo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F2201F] font-bold">•</span>
                <span>Versão web com login integrado ao aplicativo</span>
              </li>
            </ul>
          </div>

          {/* Video Section */}
          <div className="bg-white p-8">
            <div className="aspect-video bg-black flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Pitch Guarávivo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Bauhaus Deconstructed Carousel */}
      <section id="tech" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-black uppercase tracking-tight">Stack</h2>

          <div className="relative overflow-hidden py-12">
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {[
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', size: 'large' },
                { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', size: 'medium' },
                { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', size: 'medium' },
                { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', size: 'medium' },
                { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', size: 'large' },
              ].map((tech, index) => {
                const sizes = {
                  small: 'w-24 h-24',
                  medium: 'w-32 h-32',
                  large: 'w-40 h-40'
                };
                const imgSizes = {
                  small: 'w-12 h-12',
                  medium: 'w-16 h-16',
                  large: 'w-20 h-20'
                };
                const colors = [
                  'border-red-600 hover:bg-red-600',
                  'border-blue-600 hover:bg-blue-600',
                  'border-yellow-400 hover:bg-yellow-400',
                  'border-black hover:bg-black'
                ];
                const color = colors[index % colors.length];

                return (
                  <div
                    key={tech.name}
                    className={`${sizes[tech.size]} bg-white border-2 ${color} p-4 flex flex-col items-center justify-center gap-2 transition group hover:scale-105`}
                    style={{
                      transform: `rotate(${(index % 3 - 1) * 2}deg)`,
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`${imgSizes[tech.size]} object-contain group-hover:opacity-80 transition`}
                    />
                    <p className="font-bold uppercase text-xs tracking-wide text-black group-hover:text-white transition">
                      {tech.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Bauhaus Minimal */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-1.5 items-center">
                  <div className="w-3 h-3 bg-red-600"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-yellow-400"></div>
                </div>
                <span className="font-bold text-lg uppercase tracking-tight">BAUHAUS</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Forma segue função
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 uppercase tracking-wide text-xs">Links</h4>
              <div className="flex gap-4 text-xs uppercase">
                <a href="#about" className="hover:text-red-600 transition">Sobre</a>
                <a href="#team" className="hover:text-blue-600 transition">Equipe</a>
                <a href="#project" className="hover:text-yellow-400 transition">Projeto</a>
                <a href="#tech" className="hover:text-red-600 transition">Stack</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-3 uppercase tracking-wide text-xs">Contato</h4>
              <div className="flex gap-2">
                <a
                  href="https://github.com/akunzendorff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/akunzendorff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:kunzendorffana@gmail.com"
                  className="w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 transition"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t-2 border-white text-center font-bold uppercase text-xs tracking-wider">
            © 2026 BAUHAUS
          </div>
        </div>
      </footer>
    </div>
  );
}