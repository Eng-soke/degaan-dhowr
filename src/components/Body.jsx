import React from "react";
import {
  BedDouble,
  Building2,
  Sofa,
  GlassWater,
  Sparkles,
  Paintbrush
} from "lucide-react";

function ServicesSection() {
  return (
    <div className="bg-[#66CC33] py-16 text-center px-4 mt-28">
      <h1 className="text-white text-sm font-medium">WHAT WE DO</h1>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-10">
        We Offer Different Services to Clean Your Area
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <ServiceCard
          icon={<BedDouble size={40} className="mx-auto text-[#66CC33]" />}
          title="Deep Cleaning"
          desc="Nadiifin qoto dheer oo dhammaan geesaha guryaha ah."
        />

        {/* Card 2 */}
        <ServiceCard
          icon={<Building2 size={40} className="mx-auto text-[#66CC33] " />}
          title="Office Cleaning"
          desc="Xafiisyada si nadaafad leh iyo xirfad sare."
        />

        {/* Card 3 */}
        <ServiceCard
          icon={<Sofa size={40} className="mx-auto text-[#66CC33]" />}
          title="Furniture Cleaning"
          desc="Nadiifin qaas ah oo loogu talagalay kuraasta & alaabta."
        />

        {/* Card 4 */}
        <ServiceCard
          icon={<Paintbrush size={40} className="mx-auto text-[#66CC33]" />}
          title="Post-Construction"
          desc="Nadiifin buuxda kadib marka la dhameeyo dhismo."
        />

        {/* Card 5 */}
        <ServiceCard
          icon={<Sparkles size={40} className="mx-auto text-[#66CC33]" />}
          title="Carpet Cleaning"
          desc="Kaarpet-kaaga si fiican ayaa loo nadiifinayaa."
        />

        {/* Card 6 */}
        <ServiceCard
          icon={<GlassWater size={40} className="mx-auto text-[#66CC33]" />}
          title="Glass Cleaning"
          desc="Daaqadaha & muraayadaha si hufan ayaa loo nadiifiyaa."
        />
      </div>
    </div>
  );
}

// Card component re-useable
function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      {icon}
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
    </div>
  );
}

export default ServicesSection;
