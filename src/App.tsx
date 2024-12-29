import Badgers from "./components/Badge";
import { Buttons } from "./components/Button";
import Header from "./components/Header";

import FileIcon from "@/assets/file.svg";
import LInkedin from "@/assets/linkedin.svg";

function App() {
  return (
    <>
      <Header />

      <main className="mx-auto container w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between bg-gray-800/50 backdrop-blur-sm p-4 md:p-10 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
          <div className="p-4 md:p-10 flex flex-col gap-4 md:gap-6 mt-[5%]">
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
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                title="React Native"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                title="Node.js"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-green-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                title="HTML"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-orange-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                title="CSS"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                title="JavaScript"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                title="TypeScript"
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
              <Badgers
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                title="NextJs"
                className="bg-gradient-to-r from-black to-gray-800 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-gray-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base cursor-pointer"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <Buttons
                title="Acessar meu LinkedIn"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                type="default"
                icon={
                  <img src={LInkedin} alt="LinkedIn icon" className="w-5 h-5" />
                }
              />
              <Buttons
                title="Baixar meu CV"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 rounded-lg shadow-lg hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300 relative"
                type="download"
                icon={
                  <img
                    src={FileIcon}
                    alt="Ícone de download do currículo"
                    className="w-5 h-5 animate-bounce"
                  />
                }
              />
            </div>
          </div>
          <div className="shadow-xl p-2 rounded-xl mt-8 md:mt-0 max-w-[300px] mx-auto md:mx-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500">
            <img
              className="rounded-xl w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              src="https://avatars.githubusercontent.com/u/27393649?v=4"
              alt="Thiago Morgado profile picture"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
