import React from "react";
import { Link } from "react-router-dom";
// Mock data (replace with actual data from backend)
const categories = [
  {
    name: "Proteins",
    image: "/images/protein.jpg",
    items: ["Whey Protein", "Isolate", "Blends", "Casein"],
  },
  {
    name: "Gainers",
    image: "/images/gainers.jpg",
    items: ["Mass Gainers", "Weight Gainers"],
  },
  {
    name: "Workout Essentials",
    image: "/images/workout.jpg",
    items: ["Pre-workout", "BCAAs", "Glutamine", "Creatine"],
  },
  {
    name: "Health Essentials",
    image: "/images/health.jpg",
    items: ["Multivitamins", "Omega Fish Oil", "Fat Burners", "ZMA"],
  },
];

const bestSellers = [
  { name: "Whey Protein Isolate", price: 4999, image: "/images/whey.jpg" },
  { name: "Pre-Workout Energy", price: 1999, image: "/images/pre-workout.jpg" },
  { name: "BCAA Complex", price: 1499, image: "/images/bcaa.jpg" },
];

const testimonials = [
  {
    name: "John Doe",
    review: "Biocore helped me achieve my fitness goals!",
    image: "/images/user1.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "Great quality and fast shipping!",
    image: "/images/user2.jpg",
    rating: 5,
  },
];

const BrandsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative h-[300px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://www.hungrymuscle.in/Skins/hungrymuscles/images/parallex-img.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">Brands</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Brands</span>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <ul className="text-gray-600 mb-4">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  Explore Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="bg-gray-100 py-16 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Best Sellers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((product) => (
              <div
                key={product.name}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">₹{product.price}</p>
                  <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600    rounded-full py-2 font-semibold transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Biocore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "High-Quality Products",
            "Affordable Prices",
            "Fast Delivery",
            "Expert Support",
          ].map((feature) => (
            <div key={feature} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                {/* Add icons here */}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 max-w-7xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandsPage;
