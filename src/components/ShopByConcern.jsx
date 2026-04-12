import React from 'react';
import { Link } from 'react-router-dom';
import { concerns } from '../data'; 

const ShopByConcern = () => {
  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-brand-black uppercase tracking-widest mb-12">
          Shop By Concern
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {concerns.map((item, index) => (
            <Link 
              key={index}
              to={"/view-all?cat=" + encodeURIComponent(item.title)} 
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-[#C5A059] transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wide group-hover:text-[#C5A059] transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByConcern;