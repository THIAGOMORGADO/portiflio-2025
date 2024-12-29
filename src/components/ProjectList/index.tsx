import { Project } from "../../types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "Agendei",
    description:
      "Sistema de agendamento online desenvolvido com React Native e Firebase. Permite que profissionais gerenciem seus horários e clientes façam agendamentos de forma simples.",
    image:
      "https://github.com/thiagomorgado/Agendei/raw/main/assets/preview.png",
    technologies: ["React Native", "Firebase", "TypeScript", "Expo"],
    githubUrl: "https://github.com/thiagomorgado/Agendei",
    liveUrl: "https://play.google.com/store/apps/details?id=com.agendei",
  },
  {
    id: "2",
    title: "Portfolio",
    description:
      "Portfolio pessoal desenvolvido com React, TypeScript e Tailwind CSS. Apresenta projetos e habilidades de forma moderna e responsiva.",
    image:
      "https://github.com/thiagomorgado/portfolio/raw/main/public/preview.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/thiagomorgado/portifolio",
    liveUrl: "https://thiagomorgado.vercel.app",
  },
  {
    id: "3",
    title: "Ignite Shop",
    description:
      "E-commerce desenvolvido com Next.js, Stripe para pagamentos e Stitches para estilização. Funcionalidades completas de carrinho e checkout.",
    image:
      "https://github.com/thiagomorgado/ignite-shop/raw/main/public/preview.png",
    technologies: ["Next.js", "Stripe", "Stitches", "TypeScript"],
    githubUrl: "https://github.com/thiagomorgado/ignite-shop",
    liveUrl: "https://ignite-shop-lime.vercel.app",
  },
  {
    id: "4",
    title: "DT Money",
    description:
      "Aplicação de controle financeiro com cadastro de transações, cálculos automáticos e filtros de busca.",
    image:
      "https://github.com/thiagomorgado/dtmoney/raw/main/public/preview.png",
    technologies: ["React", "TypeScript", "Styled Components", "MirageJS"],
    githubUrl: "https://github.com/thiagomorgado/dtmoney",
    liveUrl: "https://dtmoney-coral.vercel.app",
  },
  {
    id: "5",
    title: "Coffee Delivery",
    description:
      "Plataforma de delivery de café com catálogo de produtos, carrinho de compras e checkout.",
    image:
      "https://github.com/thiagomorgado/coffee-delivery/raw/main/public/preview.png",
    technologies: ["React", "TypeScript", "Styled Components", "Context API"],
    githubUrl: "https://github.com/thiagomorgado/coffee-delivery",
    liveUrl: "https://coffee-delivery-sage.vercel.app",
  },
];

export function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group bg-gray-800/40 backdrop-blur-md rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/1280x720.png?text=Imagem+Indisponível";
              }}
            />
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
