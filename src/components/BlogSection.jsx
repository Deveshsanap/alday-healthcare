import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogArticles } from '../data'; // Import data

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-widest text-brand-black mb-2">
              The Journal
            </h2>
            <p className="text-gray-500">Expert advice for your daily routine.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-gold transition-colors">
            View All Articles <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4 aspect-[16/10]">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                <span className="text-brand-gold">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-brand-gold transition-colors">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;