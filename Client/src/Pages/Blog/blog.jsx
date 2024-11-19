import React from 'react'
import { Link } from 'react-router-dom';

// Sample blog data - can be moved to separate file later
const blogPosts = [
  {
    id: 1,
    title: "5 Benefits of Whey Protein for Fitness Enthusiasts",
    description: "Discover how whey protein can improve muscle recovery and support your fitness goals.",
    author: "John Doe",
    date: "Oct 10, 2024",
    image: "https://picsum.photos/400/250"
  },
  // ... add more posts
  {
    id: 2,
    title: "The Importance of Pre-Workout Nutrition",
    description: "Learn how to optimize your performance with the right pre-workout nutrition.",
    author: "Jane Smith",
    date: "Oct 15, 2024",
    image: "https://picsum.photos/400/250"
  },

]

const Blog = () => {
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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">Home</Link>
            <span className="mx-2">/</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Blog Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map(post => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-lg">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                  <div className="p-4">
                    <h2 className="font-bold text-lg mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    <p className="text-sm text-gray-500 mb-4">By {post.author} | {post.date}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                      Read More
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="mt-8 lg:mt-0 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Proteins', 'Gainers', 'Vitamins', 'Workout Essentials'].map(category => (
                  <li key={category}>
                    <a href={`#${category}`} className="text-blue-600 hover:text-blue-800">{category}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {['Whey Protein', 'Muscle Gain', 'Healthy Living'].map(tag => (
                  <span key={tag} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default Blog
