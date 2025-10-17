import { Boxes, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center  p-10 ">
      <aside>
        <Boxes className="size-10" />
        <p className="font-bold">
          <span className="text-accent ">CALEB</span>DEV
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="size-6 text-current" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube className="size-6 text-current" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="size-6 text-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
