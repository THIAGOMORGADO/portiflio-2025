import Badgers from "./components/Badge";
import { Buttons } from "./components/Button";
import Header from "./components/Header";
import { useState } from "react";

import FileIcon from "@/assets/file.svg";
import LInkedin from "@/assets/linkedin.svg";

import { db } from "./services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ProjectPortfolio } from "./components/Project";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contatos"), {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      alert("Mensagem enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar mensagem: ", error);
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Header />

        <main className="mx-auto container w-full py-16">
          <div className="min-h-[400px] w-[95%] lg:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-gray-800/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-blue-500/10">
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 animate-fade-in opacity-90 hover:opacity-100 transition-opacity">
                  Olá, me chamo
                </h3>
                <h4 className="text-2xl md:text-3xl font-semibold text-gray-200 animate-fade-in">
                  Thiago Morgado
                </h4>
                <h1 className="font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in leading-tight">
                  Desenvolvedor Full Stack
                </h1>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  "React",
                  "React Native",
                  "Node.js",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "NextJs",
                ].map((tech, index) => (
                  <Badgers
                    key={index}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech
                      .toLowerCase()
                      .replace(".", "")}/${tech
                      .toLowerCase()
                      .replace(".", "")}-original.svg`}
                    title={tech}
                    className="bg-gray-800/40 text-white px-4 py-3 rounded-xl border-2 border-blue-500/40 hover:border-blue-500 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 font-medium text-base cursor-pointer"
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center items-center">
                <Buttons
                  title="Acessar meu LinkedIn"
                  className="text-blue-600 px-8 py-4 rounded-full border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 group font-semibold shadow-md hover:shadow-lg"
                  type="default"
                  icon={
                    <img
                      src={LInkedin}
                      alt="LinkedIn icon"
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                    />
                  }
                />
                <Buttons
                  title="Baixar meu CV"
                  className="text-emerald-600 px-8 py-4 rounded-full border-2 border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-300 group font-semibold shadow-md hover:shadow-lg"
                  type="download"
                  icon={
                    <img
                      src={FileIcon}
                      alt="Ícone de download do currículo"
                      className="w-6 h-6 animate-bounce group-hover:animate-pulse"
                    />
                  }
                />
              </div>
            </div>
            <div className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20">
              <img
                className="rounded-2xl w-full h-auto object-cover hover:scale-110 transition-transform duration-300 shadow-3xl"
                src="https://avatars.githubusercontent.com/u/27393649?v=4"
                alt="Thiago Morgado profile picture"
              />
            </div>
          </div>
        </main>

        <section className="container mx-auto sm:px-20  py-16">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
            Meus Projetos
          </h2>

          <ProjectPortfolio title="backend" />
          <ProjectPortfolio title="Front End" />
          <ProjectPortfolio title="Mobile" />
          <ProjectPortfolio title="Saas" />
        </section>

        <section className="container mx-auto px-6 py-4 md:px-12 lg:px-20 lg:py-16 shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-200 mb-8 lg:mb-12 mt-6">
            Sobre mim
          </h2>
          <div className="min-h-[400px] w-[95%] lg:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-800/50 backdrop-blur-md p-10 md:p-14 rounded-3xl border border-gray-700/40 hover:border-blue-500/40 transition-all duration-500 shadow-xl hover:shadow-blue-500/20">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:space-x-12">
              <p className="text-gray-300 text-center md:text-left max-w-xl lg:max-w-2xl leading-relaxed text-lg">
                Olá! Eu sou Thiago Morgado, um desenvolvedor apaixonado por
                criar soluções inovadoras e eficientes. Tenho experiência em
                diversas tecnologias, incluindo React, TypeScript, Tailwind CSS,
                e muito mais. Adoro aprender coisas novas e enfrentar desafios
                que me permitam crescer profissionalmente. No meu tempo livre,
                gosto de contribuir para projetos de código aberto e
                compartilhar meu conhecimento com a comunidade.
              </p>

              <img
                className="rounded-full w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover shadow-2xl transition-transform duration-300 transform hover:scale-105"
                src="https://avatars.githubusercontent.com/u/27393649?v=4"
                alt="Thiago Morgado profile picture"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-20 py-16">
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">
              Contato
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full max-w-md p-2 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-md p-2 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <textarea
                placeholder="Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full max-w-md p-2 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <button className="w-full max-w-md p-2 rounded-md bg-blue-500 text-white font-bold hover:bg-blue-600 transition duration-300">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
