import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <div className="text-sm">
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
              </div>
              <h2 className="text-xl font-bold mb-4">Visit Us</h2>
              <p className="text-gray-600">
                Biocore Nutrition & Supplement Store, Shop No. 12, Health Plaza,
                Near Green Park, Main Street, Los Angeles
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-blue-500 text-2xl" />
              </div>
              <h2 className="text-xl font-bold mb-4">Call Us</h2>
              <p className="text-gray-600">+1-800-555-1234</p>
              <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-green-500 text-2xl" />
              </div>
              <h2 className="text-xl font-bold mb-4">Email Us</h2>
              <p className="text-gray-600">info@biocorenutrition.com</p>
              <p className="text-gray-600">support@biocorenutrition.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-red-500 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58502.45206585226!2d72.34177926583078!3d23.58986656750773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c422caf789ef5%3A0x170bbc90b8be8bdc!2sMehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1731995718653!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="filter"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
