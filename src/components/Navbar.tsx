import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          Zapa Infra
        </Link>
        <ul className="hidden md:flex space-x-6">
        <Link
                to="/"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
          {['About', 'Products', 'Projects', 'Contact Us'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <Button className="md:hidden">Menu</Button>
      </nav>
    </header>
  );
};

export default Navbar;
