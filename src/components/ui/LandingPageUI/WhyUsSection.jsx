import React from "react";

const IconPlaceholder = ({ children }) => (
  <div className="text-3xl mb-2">{children}</div>
);

const StatCard = ({ icon, number, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <IconPlaceholder>{icon}</IconPlaceholder>
    <div className="text-2xl font-semibold">{number}</div>
    <div className="text-gray-600">{description}</div>
  </div>
);

const WhySection = () => {
  return (
    <div className="py-[70px]  bg-[#747264]">
      <h2 className="text-3xl text-center font-bold mb-8">Why Mediapp ?</h2>
      <div className="flex justify-center space-x-4">
        <StatCard
          icon="👥"
          number="2700 K"
          description="Lives covered since inception"
        />
        <StatCard
          icon="🏥"
          number="1300 +"
          description="Network Hospitals across the US"
        />
        <StatCard
          icon="⭐"
          number="4 Rating"
          description="Based on 8050 User reviews"
        />
        <StatCard
          icon="🛡️"
          number="90 %"
          description="Cashless claims settled in 1 hour"
        />
      </div>
    </div>
  );
};

export default WhySection;
