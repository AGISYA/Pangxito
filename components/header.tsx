const Header = () => (
  <header className="absolute top-0 left-0 right-0 bg-white shadow-md py-4">
    <nav className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="text-3xl font-bold text-orange-500">Pangxito</div>

      {/* Navigation */}
      <ul className="flex space-x-8 text-gray-700">
        <li>
          <a href="#services" className="hover:text-orange-500">
            Services
          </a>
        </li>
        <li>
          <a href="#menu" className="hover:text-orange-500">
            Menu
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </li>
      </ul>

      {/* Sign Up Button */}
      <a
        href="#signup"
        className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Sign Up
      </a>
    </nav>
  </header>
);

export default Header;
