import React, { useState, useEffect } from "react";
import bgImage from "../../assets/bg_image.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Best Whey Protein");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Simulated product data - Replace with actual API call
  const fetchProducts = (category) => {
    setIsLoading(true);
    // Simulate API call with category filter
    setTimeout(() => {
      const filteredProducts = [
        {
          id: 1,
          name: "Gold Standard Whey Protein",
          originalPrice: 79.99,
          discountPrice: 69.99,
          discount: 13,
          image: bgImage,
          rating: 4.8,
          reviews: 2156,
          inStock: true,
        },
        {
          id: 2,
          name: "Pre-Workout C4 Original",
          originalPrice: 49.99,
          discountPrice: 39.99,
          discount: 20,
          image: bgImage,
          rating: 4.6,
          reviews: 1458,
          inStock: true,
        },
        {
          id: 3,
          name: "Mass Gainer Serious Mass",
          originalPrice: 89.99,
          discountPrice: 79.99,
          discount: 11,
          image: bgImage,
          rating: 4.5,
          reviews: 892,
          inStock: false,
        },
        {
          id: 4,
          name: "BCAA Energy Powder",
          originalPrice: 39.99,
          discountPrice: 34.99,
          discount: 13,
          image: bgImage,
          rating: 4.4,
          reviews: 645,
          inStock: true,
        },
        {
          id: 5,
          name: "Creatine Monohydrate",
          originalPrice: 29.99,
          discountPrice: 24.99,
          discount: 17,
          image: bgImage,
          rating: 4.7,
          reviews: 1892,
          inStock: true,
        },
        {
          id: 6,
          name: "Protein Bar Bundle",
          originalPrice: 34.99,
          discountPrice: 29.99,
          discount: 14,
          image: bgImage,
          rating: 4.3,
          reviews: 567,
          inStock: false,
        },
      ];
      setProducts(filteredProducts);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory]);

  // Navigation categories with icons
  const categories = [
    { name: "Offers", image: "/images/offers.jpg" },
    { name: "Proteins", image: "/images/proteins.jpg" },
    { name: "Gainers", image: "/images/gainers.jpg" },
    { name: "Pre-Workout", image: "/images/pre-workout.jpg" },
    { name: "Vitamins", image: "/images/vitamins.jpg" },
    { name: "Recovery", image: "/images/recovery.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Add Decorative Elements at the top */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-1/4 left-10 w-12 h-12 border-4 border-red-200 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 border-4 border-blue-200 rounded-lg animate-bounce-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-yellow-200 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-green-200 rounded-lg animate-ping-slow"></div>

      {/* Existing content - make sure it has a relative z-index */}
      <div className="relative z-10">
        {/* ===== Navigation Categories Section Start ===== */}
        <section className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide scroll-smooth py-6">
          <div className="flex justify-center space-x-4 md:space-x-8 px-4 md:px-6 min-w-max">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex flex-col items-center group cursor-pointer min-w-[80px]"
                onClick={() => setActiveCategory(category.name)}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:bg-red-50 transition-all duration-300 relative overflow-hidden">
                  <span className="text-2xl md:text-3xl">{category.icon}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="mt-2 text-sm md:text-base font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        {/* ===== Navigation Categories Section End ===== */}

        {/* ===== Banner/Carousel Section Start ===== */}
        <section className="max-w-7xl mx-auto relative flex justify-center w-full px-4 md:px-8 mb-12">
          <div className="relative w-full max-w-[95%] h-[400px] md:h-[600px]">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet !bg-white`,
                bulletActiveClass: "swiper-pagination-bullet-active !bg-red-500",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <SwiperSlide>
                <div className="relative h-full">
                  <img
                    src={bgImage}
                    alt="Banner 1"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                    <div className="text-white ml-12 max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Premium Supplements
                      </h2>
                      <p className="text-lg md:text-xl mb-6">
                        Get 20% off on all protein supplements
                      </p>
                      <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <img
                    src={bgImage}
                    alt="Banner 2"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                    <div className="text-white ml-12 max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Pre-Workout Energy
                      </h2>
                      <p className="text-lg md:text-xl mb-6">
                        Boost your workout performance
                      </p>
                      <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative h-full">
                  <img
                    src={bgImage}
                    alt="Banner 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
                    <div className="text-white ml-12 max-w-xl">
                      <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        Recovery Essentials
                      </h2>
                      <p className="text-lg md:text-xl mb-6">
                        Complete post-workout recovery solutions
                      </p>
                      <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* ===== Banner/Carousel Section End ===== */}

        {/* ===== Featured Products Section Start ===== */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Featured Products
              <div className="h-1 w-20 bg-red-500 mt-2 rounded-full" />
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => fetchProducts(activeCategory)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Product Grid with Loading State */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="animate-pulse">
                  <div className="bg-gray-200 h-64 rounded-xl mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.discount > 0 && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {product.discount}% OFF
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < product.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-gray-400 line-through">
                          ${product.originalPrice}
                        </span>
                        <span className="text-2xl font-bold text-red-600 ml-2">
                          ${product.discountPrice}
                        </span>
                      </div>
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          /* Add to wishlist */
                        }}
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 hover:text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                        product.inStock
                          ? "bg-black text-white hover:bg-red-600"
                          : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* ===== Featured Products Section End ===== */}

        {/* ===== Our Products Section Start ===== */}
        <section className="max-w-7xl mx-auto py-16 px-4 md:px-8">
          {/* Section Title */}
          <h2 className="text-3xl font-bold tracking-tight">
            Our Products
            <div className="h-1 w-20 bg-red-500 mt-2 rounded-full" />
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Best Whey Protein", "Best Gainers", "Top Pre-Workout"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCategory(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === tab
                    ? "bg-green-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Product Image Container */}
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold rounded-full px-3 py-1">
                    {product.discount}% OFF
                  </div>
                  {/* COD Badge */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-medium rounded-full px-3 py-1">
                    COD Available
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-4">
                    <span className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </span>
                    <span className="text-xl font-bold text-green-600 ml-2">
                      ${product.discountPrice}
                    </span>
                  </div>

                  <button
                    className="w-full bg-black text-white py-2 rounded-lg font-medium
                    transition-colors duration-300 hover:bg-green-600"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* ===== Our Products Section End ===== */}

        {/* ===== About Us Section Start ===== */}
        <section className="max-w-7xl mx-auto w-full relative py-20">
          <img
            src={bgImage}
            alt="About Us Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                About SupplementStore
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                We are dedicated to providing the highest quality supplements to
                help you achieve your fitness goals. With over a decade of
                experience, we carefully select premium products from trusted
                manufacturers to ensure you get the best results from your fitness
                journey.
              </p>
            </div>
          </div>
        </section>
        {/* ===== About Us Section End ===== */}

        {/* ===== Trusted Brands Section Start ===== */}
        <section className="max-w-7xl mx-auto py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight">
            Our Trusted Brands
            <div className="h-1 w-20 bg-red-500 mt-2 mb-8 rounded-full" />
          </h2>

            <Swiper
              slidesPerView={1}
              spaceBetween={3}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="relative"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SwiperSlide key={num}>
                  <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-2 hover:shadow-md transition-shadow duration-300">
                    <img
                      src={`../../public/brands/0${num}.jpg`}
                      alt={`Brand ${num}`}
                      className="w-full h-40 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </SwiperSlide>
              ))}

              {/* Gradient Fade Effects */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
            </Swiper>
          </div>
        </section>
        {/* ===== Trusted Brands Section End ===== */}

        {/* ===== Shop by Goal Section Start ===== */}
        <section className="max-w-7xl mx-auto py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            
            <h2 className="text-3xl font-bold tracking-tight">
            Shop By Your Goal
            <div className="h-1 w-20 bg-red-500 mt-2 mb-8 rounded-full" />
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src="../src/assets/Goals/cat01.png" 
                  alt="Body Building"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800">Body Building</h3>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src="../src/assets/Goals/cat02.png" 
                  alt="Bulking Up"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800">Bulking Up</h3>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src="../src/assets/Goals/cat03.png" 
                  alt="Muscle Mass"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800">Muscle Mass</h3>
              </div>
              <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img 
                  src="../src/assets/Goals/cat04.png" 
                  alt="Immunity"
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800">Immunity</h3>
              </div>
            </div>
          </div>
        </section>
        {/* ===== Shop by Goal Section End ===== */}
      </div>
    </div>
  );
};

export default Home;
