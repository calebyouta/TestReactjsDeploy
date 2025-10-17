import { Mail } from "lucide-react";
import img from "../src/assets/assets/img.jpg";

const Home = () => {
  const email = "atebadimitri473@gmail.com";
  const subject = "Demande d'informations sur vos services";
  const body =
    "Bonjour CalebDev,\n\nJe souhaite avoir plus de détails sur vos services.";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  return (
    <div
      className="my-10 flex flex-col-reverse items-center justify-center md:my-32 md:flex-row"
      id="Home"
    >
      <div className="flex flex-col">
        <h1 className="mt-4 text-center text-5xl font-bold md:mt-0 md:text-left md:text-6xl">
          Bonjour, <br /> je suis <span className="text-accent">CalebDev</span>
        </h1>
        <p className="text-md my-4 text-center md:text-left">
          Je suis un developpeur fullstack <br /> utilisant React et Node.js{" "}
          <br /> ainsi que Graphiste Designer. Contactez-moi si vous avez besoin
          de mes services.
        </p>
        <a
          onClick={() => (window.location.href = mailtoLink)}
          href=""
          className="btn btn-accent md:w-fit"
        >
          <Mail className="size-5" /> Contactez-moi
        </a>
      </div>

      <div className="md:ml-60">
        <img
          src={img}
          alt=""
          className="size-96 border-8 border-accent object-cover shadow-xl"
          style={{ borderRadius: "49% 51% 100% 0% / 100% 100% 0% 0% " }}
        />
      </div>
    </div>
  );
};

export default Home;
