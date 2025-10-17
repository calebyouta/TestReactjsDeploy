import { Boxes } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center p-4 md:justify-between">
      <a href="#" className="flex items-center text-3xl font-bold md:text-xl">
        <Boxes className="mr-2" />
        <span className="text-accent ">CALEB</span>DEV
      </a>
      <ul className="hidden space-x-6 md:flex ">
        <li>
          <a href="#Home" className="btn btn-ghost btn-sm">
            Acceuil
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-ghost btn-sm">
            A propos
          </a>
        </li>
        <li>
          <a href="#Experience" className="btn btn-ghost btn-sm">
            Mes experiences
          </a>
        </li>
        <li>
          <a href="#Projets" className="btn btn-ghost btn-sm">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
