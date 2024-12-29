import Badgers from "./components/Badge";
import { Buttons } from "./components/Button";
import Header from "./components/Header";

import FileIcon from "@/assets/file.svg";
import LInkedin from "@/assets/linkedin.svg";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800">
        <Header />

        <main className="mx-auto container w-full">
          <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between bg-gray-800/50 backdrop-blur-sm p-4 md:p-10 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
            <div className="p-4 md:p-10 flex flex-col gap-4 md:gap-6">
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400 animate-fade-in">
                Olá, me chamo
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-200 animate-fade-in">
                Thiago Morgado
              </h4>
              <h1 className="font-bold text-3xl md:text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
                Desenvolvedor Full Stack
              </h1>

              <div className="flex flex-wrap gap-3">
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="React"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-blue-500/50 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="React Native"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-blue-400/50 hover:border-blue-400 shadow-lg hover:shadow-blue-400/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  title="Node.js"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-green-500/50 hover:border-green-500 shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  title="HTML"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  title="CSS"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-blue-600/50 hover:border-blue-600 shadow-lg hover:shadow-blue-600/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  title="JavaScript"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-yellow-500/50 hover:border-yellow-500 shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  title="TypeScript"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-blue-700/50 hover:border-blue-700 shadow-lg hover:shadow-blue-700/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
                <Badgers
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  title="NextJs"
                  className="bg-gray-800/50 text-white p-2 md:p-3 rounded-xl border-2 border-white/50 hover:border-white shadow-lg hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mt-10">
                <Buttons
                  title="Acessar meu LinkedIn"
                  className="bg-gray-800/20 text-white p-4 rounded-lg border-2 border-blue-500/50 hover:border-blue-500 hover:bg-blue-500/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group"
                  type="default"
                  icon={
                    <img
                      src={LInkedin}
                      alt="LinkedIn icon"
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                    />
                  }
                />
                <Buttons
                  title="Baixar meu CV"
                  className="bg-gray-800/20 text-white p-4 rounded-lg border-2 border-emerald-500/50 hover:border-emerald-500 hover:bg-emerald-500/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 group relative"
                  type="download"
                  icon={
                    <img
                      src={FileIcon}
                      alt="Ícone de download do currículo"
                      className="w-5 h-5 animate-bounce group-hover:animate-pulse"
                    />
                  }
                />
              </div>
            </div>
            <div className="p-2 rounded-xl mt-8 md:mt-0 max-w-[300px] mx-auto md:mx-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
              <img
                className="rounded-xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src="https://avatars.githubusercontent.com/u/27393649?v=4"
                alt="Thiago Morgado profile picture"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
