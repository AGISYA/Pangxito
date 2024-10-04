const MenuItem = ({ image, title, description, price }: any) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover rounded-lg mb-6"
    />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-2xl font-semibold text-gray-800">{price}</p>
  </div>
);

export default MenuItem;
