import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
  image: string; // Added image property for project card
}

const projects: Project[] = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    link: "https://link-do-projeto1.com",
    image: "https://via.placeholder.com/150", // Placeholder image for project 1
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    link: "https://link-do-projeto2.com",
    image: "https://via.placeholder.com/150", // Placeholder image for project 2
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto 3",
    link: "https://link-do-projeto3.com",
    image: "https://via.placeholder.com/150", // Placeholder image for project 3
  },
  // ... adicione mais projetos conforme necessário
];

type ProjectProps = {
  title: string;
};

export function ProjectPortfolio({ title }: ProjectProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4 transition-transform duration-300 hover:scale-105" // Enhanced image display
            />
            <h3 className="text-xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition"
              >
                Ver Projeto
              </a>
              <a
                href={`${project.link}/demo`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-700 transition"
              >
                Ver Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
