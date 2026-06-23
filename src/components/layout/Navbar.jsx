import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Container from "../common/Container";
import Button from "../common/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ["Services", "Gallery", "FAQ", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <Container>
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-bold text-teal-700">Altus Clean</h1>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-slate-700 hover:text-teal-700"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href="#booking">
              <Button>Book Now</Button>
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
