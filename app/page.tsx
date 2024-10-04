// import Header from "@/components/organisms/header";
// import MenuItem from "@/components/organisms/menuitem";

import Header from "@/components/header";
import MenuItem from "@/components/menuitem";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white h-screen flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: "url('/images/pangsit1.jpg')" }}
      >
        <Header />
        <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg">
          PANGXITO
        </h1>
        <p className="text-2xl mb-8 drop-shadow-lg">
          Pedas Manis Gurihhh nyohhh
        </p>
        <a
          href="#menu"
          className="px-8 py-4 bg-white text-yellow-500 font-semibold rounded-full hover:bg-yellow-300 transition transform hover:scale-105"
        >
          Lihat Menu
        </a>
      </section>

      {/* Food Menu Section */}
      <section id="menu" className="py-24 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-16">
            Menu Spesial
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <MenuItem
              image="/images/pangsit1.jpg"
              title="Pangxito kuah"
              description="ini deskripsi"
              price="Rp.17000"
            />
            <MenuItem
              image="/images/pangsit2.jpg"
              title="Pangxito tulang rangu"
              description="ini deskripsi"
              price="Rp.20000"
            />
            <MenuItem
              image="/images/pangsit3.jpg"
              title="Pangxito"
              description="ini deskripsi"
              price="Rp.17000"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-yellow-500 text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Siap menikmti pedas manis nya Pangxito?
          </h2>
          <a
            href="#"
            className="px-8 py-4 bg-white text-yellow-500 font-semibold rounded-full hover:bg-yellow-300 transition transform hover:scale-105"
          >
            pesan sekarang
          </a>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
