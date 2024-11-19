import React from "react";
import { Link } from "react-router-dom";

const Goals = () => {
  const goalCategories = [
    {
      title: "Weight Loss",
      description: "Support fat burning and maintain lean muscle",
      image: "/images/weight-loss.jpg",
      products: [
        { name: "L-Carnitine Fat Burner", price: "₹1,999", image: "/images/l-carnitine.jpg" },
      ],
    },
    {
      title: "Muscle Gain",
      description: "Build strength and power with protein and creatine",
      image: "/images/muscle-gain.jpg",
      products: [
        { name: "Whey Protein Isolate", price: "₹4,999", image: "/images/whey-protein.jpg" },
      ],
    },
    // ... other categories
  ];

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
          <h1 className="text-4xl font-bold mb-4">Goals</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Goals</span>
          </div>
        </div>
      </div>

      {/* Goals Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Goal</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalCategories.map((goal, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
              <img src={goal.image} alt={goal.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">{goal.title}</h3>
              <p className="text-gray-600 mb-4">{goal.description}</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                Explore Products
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 py-16 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product cards will be mapped here */}
            {goalCategories.flatMap(category => 
              category.products.map((product, index) => (
                <div key={`${category.title}-${index}`} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.price}</p>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    Add to Cart
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Steps will be mapped here */}
          {[
            {
              icon: "🎯",
              title: "Set Your Goal",
              description: "Choose from our range of fitness goals that match your aspirations"
            },
            {
              icon: "📋", 
              title: "Get Personalized Plan",
              description: "Receive a customized supplement and nutrition plan tailored to your needs"
            },
            {
              icon: "🚀",
              title: "Track Progress",
              description: "Monitor your journey and adjust your plan as you achieve milestones"
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-sm">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonials will be mapped here */}
            {[
              {
                name: "Sarah Johnson",
                goal: "Weight Loss",
                image: "/images/testimonial1.jpg",
                quote: "Following Biocore's weight loss program helped me shed 20kg in 6 months. The supplements and guidance were incredible!",
                achievement: "-20kg"
              },
              {
                name: "Mike Chen",
                goal: "Muscle Gain",
                image: "/images/testimonial2.jpg",
                quote: "Gained 12kg of lean muscle using Biocore's mass gainer program. The results exceeded my expectations!",
                achievement: "+12kg"
              },
              {
                name: "Lisa Williams",
                goal: "Strength",
                image: "/images/testimonial3.jpg",
                quote: "The strength training supplements helped me increase all my lifts by 40%. Amazing products and support!",
                achievement: "+40% Strength"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">Goal: {testimonial.goal}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="text-center">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    {testimonial.achievement}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goals;
