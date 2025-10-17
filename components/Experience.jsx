import Title from "./Title";

import imgCSS from "../src/assets/assets/techno/css.png";
import imgHTML from "../src/assets/assets/techno/html.png";
import imgIllustrator from "../src/assets/assets/techno/iconillustrator.png";
import imgPhotoShop from "../src/assets/assets/techno/iconphotoshop.png";
import imgJS from "../src/assets/assets/techno/js.png";
import imgNODE from "../src/assets/assets/techno/node-js.png";
import imgREACT from "../src/assets/assets/techno/react.png";
import imgTAILWIND from "../src/assets/assets/techno/tailwind.png";
const skills = [
  { id: 1, name: "HTML", image: imgHTML },
  { id: 2, name: "CSS", image: imgCSS },
  { id: 3, name: "JavaScript", image: imgJS },
  { id: 4, name: "React", image: imgREACT },
  { id: 5, name: "Node.js", image: imgNODE },
  { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 7, name: "Photoshop", image: imgPhotoShop },
  { id: 8, name: "Illustrator", image: imgIllustrator },
];

import amazon from "../src/assets/assets/companies/amazon.png";
import google from "../src/assets/assets/companies/google.png";
import meta from "../src/assets/assets/companies/meta.webp";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Google",
    period: "Sep 2022 - Présent",
    description: [
      "Développement de nouvelles fonctionnalités pour Google Maps.",
      "Optimisation des performances de l'application.",
    ],
    image: google,
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Meta",
    period: "Jan 2021 - Août 2022",
    description: [
      "Création d'une plateforme interne de collaboration pour les équipes.",
      "Mise en place d'une architecture scalable et optimisée.",
    ],
    image: meta,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Amazon",
    period: "Mai 2019 - Déc 2020",
    description: [
      "Développement d'une interface utilisateur pour Amazon Web Services.",
      "Implémentation des tests unitaires et E2E.",
    ],
    image: amazon,
  },
];
const Experience = () => {
  return (
    <div id="Experience">
      <Title title="Experiences" />
      <div className="flex flex-col-reverse  items-center justify-center md:flex-row">
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 md:mt-0 md:w-1/3">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" flex flex-col items-center justify-center"
            >
              <div className="size-24 rounded-full border-2 border-accent p-2">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="size-full rounded-full object-cover"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4 md:ml-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col rounded-xl bg-base-200 p-5 shadow-lg"
            >
              <div className="flex items-center">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="size-10 object-cover"
                />
                <div className="ml-4">
                  <h1 className="text-xl font-bold text-accent">
                    {exp.role},{exp.company}
                  </h1>
                  <span className="text-sm">{exp.period} </span>
                </div>
              </div>
              <ul className="ml-16 mt-2 list-disc">
                {exp.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
