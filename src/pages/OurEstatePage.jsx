import MainLayout from "../Layout/MainLayout";
import EstateCard from "../components/EstateCard";

import { Link } from "react-router-dom";

const OurEstatePage = () => {
  const estate = [
    {
      label: "Irede",
      path: "/irede"
    },
    {
      label: "Duke and Duchess",
      path: "/duke"
    },
    {
      label: "Buckingham Estate",
      path: "/burckinham"
    },
    {
      label: "Horizon Court",
      path: "/horizon"
    },
    {
      label: "Obibi Eze",
      path: "/obibi"
    }
  ];

  return (
    <MainLayout>
      <div className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Estates
          </h1>

          {/* Estate Cards Grid */}
          {/* Estate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estate.map((item, index) => (
              <Link key={index} to={item.path}>
                <EstateCard estatename={item.label} />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default OurEstatePage;