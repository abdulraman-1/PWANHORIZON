import MainLayout from "../Layout/MainLayout";
import BuyCard from "../components/BuyCard";

const BuyNowPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Dream Home Awaits
          </h1>
          <p className="text-xl">
            Secure this property with instant purchase option
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex gap-2 flex-col md:flex-row">
        {/* Buy Now Form */}
          <BuyCard />

        {/* Company Info Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">
            PWAN <span className="text-red-500">HORIZON</span>
          </h2>
          <p className="text-lg mb-4">
            Head Office KM 49, Olòkonla, Adjacent Lagos Business School, Lekki -
            Epe Expy, Eti-Osa, Lagos 106104, Lagos, Nigeria
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Sales</h3>
            <p>+234 806 280 6026</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">We are here</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Burckingham Estate</li>
              <li>Horizon Estate</li>
              <li>Duke And Duchess Estate</li>
              <li>Obibi Eze Estate</li>
              <li>Irede Estate</li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BuyNowPage;
