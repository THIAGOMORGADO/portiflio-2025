import Badgers from "./components/Badge";
import Header from "./components/Header";

import ReactIcon from "@/assets/reactIcon.svg";

function App() {
  return (
    <>
      <Header />

      <main className="mx-auto container w-full mt-[2rem] px-4">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between shadow-2xl p-4 md:p-10 rounded-md">
          <div className="p-4 md:p-10 flex flex-col gap-4 md:gap-6 mt-[5%]">
            <h3 className="text-xl md:text-2xl font-semibold">Ola, me chamo</h3>
            <h4 className="text-xl md:text-2xl font-semibold">
              Thiago Morgado
            </h4>
            <h1 className="font-bold text-3xl md:text-4xl">
              Desenvolvedor Full Stack
            </h1>

            <div className="flex flex-wrap gap-2">
              <Badgers
                src={ReactIcon}
                title="React"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="React Native"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="Node.js"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-green-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="HTML"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-orange-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="CSS"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="JavaScript"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-yellow-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="TypeScript"
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
              <Badgers
                src={ReactIcon}
                title="NextJs"
                className="bg-gradient-to-r from-black to-gray-800 text-white p-2 md:p-3 rounded-xl shadow-lg hover:shadow-gray-300/50 hover:-translate-y-1 transition-all duration-300 font-medium w-fit text-sm md:text-base"
              />
            </div>
          </div>
          <div className="shadow-md p-2 rounded-md mt-8 md:mt-0 max-w-[300px] mx-auto md:mx-0">
            <img
              className="rounded-md w-full h-full object-cover"
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
