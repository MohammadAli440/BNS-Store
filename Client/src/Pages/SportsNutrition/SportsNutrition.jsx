import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SportsNutrition = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = {
    proteins: [
      { id: 1, name: 'Whey Protein Isolate', price: 2999, image: '/images/whey.jpg' },
      { id: 2, name: 'Casein Protein', price: 3499, image: '/images/casein.jpg' },
      // ... more products
    ],
    preworkout: [
      { id: 3, name: 'Pre-Workout Energy', price: 1499, image: '/images/preworkout.jpg' },
      { id: 4, name: 'BCAA Complex', price: 1999, image: '/images/bcaa.jpg' },
      // ... more products
    ],
    // ... other categories
  };

  return (
    <div className="min-h-screen bg-gray-50">
       {/* Banner Section */}
       <div className="relative h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('https://www.hungrymuscle.in/Skins/hungrymuscles/images/parallex-img.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Sports Nutrition</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
            <span className="mx-2">/</span>
            <span>Sports Nutrition</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Add this button for mobile */}
        <button 
          className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Toggle Filters
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`md:w-64 ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">₹1000 - ₹2000</span>
                  </label>
                  {/* ... more price ranges */}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Brands</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Biocore Nutrition</span>
                  </label>
                  {/* ... more brands */}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Display */}
          <main className="flex-1">
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(categories).map(([_, products]) => (
                products.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-gray-600 mt-1">₹{product.price}</p>
                      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                        View Detail
                      </button>
                    </div>
                  </div>
                ))
              ))}
            </div>

            {/* About Section */}
            <section className="mt-12 bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">About Sports Nutrition</h2>
              <p className="text-gray-600 leading-relaxed">
                Biocore Nutrition & Supplement Store offers a wide range of sports nutrition products 
                to cater to every fitness need. From whey protein for muscle recovery to energy drinks 
                for performance, explore products crafted to enhance your health and fitness journey. 
                Whether you're building muscle, managing weight, or improving endurance, Biocore has 
                the perfect supplement for you.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SportsNutrition;
