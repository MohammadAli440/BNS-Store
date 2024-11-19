import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "hungru-muscles-nutrition-pro-creatine-60-servings",
      price: 99.99,
      quantity: 1,
      image: "../../src/assets/product and promition/hungru-muscles-nutrition-pro-creatine-60-servings_1374.jpg"
    },
    {
      id: 2,
      name: "hungry-muscles-nutrition-nitro-pump",
      price: 99.99,
      quantity: 1,
      image: "../../src/assets/product and promition/hungry-muscles-nutrition-nitro-pump-5lbs_1399.jpg"
    }
    // Add more initial items as needed
  ]);
  const [notifications, setNotifications] = useState({
    count: 3,
    items: [
      {
        id: 1,
        type: 'offer',
        title: 'Special Discount!',
        message: '20% off on all protein supplements',
        time: '2 hours ago'
      },
      {
        id: 2,
        type: 'product',
        title: 'New Arrival',
        message: 'Check out our new Pre-Workout Formula',
        time: '5 hours ago'
      },
      {
        id: 3,
        type: 'info',
        title: 'Limited Time Offer',
        message: 'Free shipping on orders above $50',
        time: '1 day ago'
      }
    ]
  });

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowCart(false); // Close cart when notifications open
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowNotifications(false); // Close notifications when cart opens
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => ({
      count: prev.count - 1,
      items: prev.items.filter(item => item.id !== notificationId)
    }));
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#111111] to-[#ff0000] px-4 py-2">
        <div className="container mx-auto flex items-center">
          <div className="flex items-center space-x-2 text-white text-sm">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L5.5 6.5M11 1L7.5 11L5.5 6.5M11 1L1 4.5L5.5 6.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Mehsana</span>
          </div>
          <div className="ml-4 flex items-center space-x-2 text-white text-sm">
            <svg
              width="12"
              height="15"
              viewBox="0 0 12 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6.31818C11 10.4545 6 14 6 14C6 14 1 10.4545 1 6.31818C1 4.90771 1.52678 3.55501 2.46447 2.55766C3.40215 1.56031 4.67392 1 6 1C7.32608 1 8.59785 1.56031 9.53553 2.55766C10.4732 3.55501 11 4.90771 11 6.31818Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8.09091C6.92047 8.09091 7.66667 7.29723 7.66667 6.31818C7.66667 5.33913 6.92047 4.54545 6 4.54545C5.07953 4.54545 4.33333 5.33913 4.33333 6.31818C4.33333 7.29723 5.07953 8.09091 6 8.09091Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>{" "}
            <span>Store Locations</span>
          </div>
          <div className="ml-4 flex items-center space-x-2 text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span>+91 99040 58535</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="container mx-auto px-6 py-6 bg-white">
        <div className="flex items-center justify-between gap-8">
          <img
            src="../../public/Logo/bns.png"
            alt="Logo"
            className="h-20 w-auto hover:opacity-80 transition-opacity"
          />

          <div className="flex-1 relative max-w-3xl">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 pl-12 border-2 border-gray-300 rounded-md focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all shadow-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <div className="flex items-center gap-10">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => (window.location.href = "/login")}
            >
              <div className="bg-[#F1EEEE] p-2 rounded-full">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6668 15.5V13.8333C14.6668 12.9493 14.3156 12.1014 13.6905 11.4763C13.0654 10.8512 12.2176 10.5 11.3335 10.5H4.66683C3.78277 10.5 2.93493 10.8512 2.30981 11.4763C1.68469 12.1014 1.3335 12.9493 1.3335 13.8333V15.5M11.3335 3.83333C11.3335 5.67428 9.84111 7.16667 8.00016 7.16667C6.15921 7.16667 4.66683 5.67428 4.66683 3.83333C4.66683 1.99238 6.15921 0.5 8.00016 0.5C9.84111 0.5 11.3335 1.99238 11.3335 3.83333Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-sm mt-1 text-gray-600">Account</span>
            </div>
            <div className="flex flex-col items-center relative">
              <div 
                className="bg-[#F1EEEE] p-2 rounded-full cursor-pointer"
                onClick={toggleNotifications}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path d="M 23.277344 4.0175781 C 15.193866 4.3983176 9 11.343391 9 19.380859 L 9 26.648438 L 6.3496094 31.980469 A 1.50015 1.50015 0 0 0 6.3359375 32.009766 C 5.2696804 34.277268 6.9957076 37 9.5019531 37 L 18 37 C 18 40.295865 20.704135 43 24 43 C 27.295865 43 30 40.295865 30 37 L 38.496094 37 C 41.002339 37 42.730582 34.277829 41.664062 32.009766 A 1.50015 1.50015 0 0 0 41.650391 31.980469 L 39 26.648438 L 39 19 C 39 10.493798 31.863289 3.6133643 23.277344 4.0175781 z M 23.417969 7.0136719 C 30.338024 6.6878857 36 12.162202 36 19 L 36 27 A 1.50015 1.50015 0 0 0 36.15625 27.667969 L 38.949219 33.289062 C 39.128826 33.674017 38.921017 34 38.496094 34 L 9.5019531 34 C 9.077027 34 8.8709034 33.674574 9.0507812 33.289062 C 9.0507812 33.289062 9.0507812 33.287109 9.0507812 33.287109 L 11.84375 27.667969 A 1.50015 1.50015 0 0 0 12 27 L 12 19.380859 C 12 12.880328 16.979446 7.3169324 23.417969 7.0136719 z M 21 37 L 27 37 C 27 38.674135 25.674135 40 24 40 C 22.325865 40 21 38.674135 21 37 z"></path>
                </svg>
              </div>
              <span className="absolute -top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.count}
              </span>
              <span className="text-sm mt-1 text-gray-600">Notifications</span>
              
              {/* Notification Popup */}
              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Notifications</h3>
                    <div className="divide-y divide-gray-200">
                      {notifications.items.map(notification => (
                        <div key={notification.id} className="py-3">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          <p className="text-sm text-gray-600">{notification.message}</p>
                          <span className="text-xs text-gray-400">{notification.time}</span>
                          <button 
                            onClick={() => markNotificationAsRead(notification.id)}
                            className="text-xs text-red-500 hover:text-red-700"
                          >
                            Mark as read
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col items-center relative">
              <div 
                className="bg-[#F1EEEE] p-2 rounded-full cursor-pointer"
                onClick={toggleCart}
              >
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.1665 0.833496H4.49984L6.73317 11.9918C6.80937 12.3755 7.01809 12.7201 7.32279 12.9654C7.62749 13.2107 8.00875 13.341 8.39984 13.3335H16.4998C16.8909 13.341 17.2722 13.2107 17.5769 12.9654C17.8816 12.7201 18.0903 12.3755 18.1665 11.9918L19.4998 5.00016H5.33317M8.6665 17.5002C8.6665 17.9604 8.29341 18.3335 7.83317 18.3335C7.37293 18.3335 6.99984 17.9604 6.99984 17.5002C6.99984 17.0399 7.37293 16.6668 7.83317 16.6668C8.29341 16.6668 8.6665 17.0399 8.6665 17.5002ZM17.8332 17.5002C17.8332 17.9604 17.4601 18.3335 16.9998 18.3335C16.5396 18.3335 16.1665 17.9604 16.1665 17.5002C16.1665 17.0399 16.5396 16.6668 16.9998 16.6668C17.4601 16.6668 17.8332 17.0399 17.8332 17.5002Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
              <span className="text-sm mt-1 text-gray-600">Cart</span>

              {/* Cart Popup */}
              {showCart && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-4">Shopping Cart</h3>
                    <div className="divide-y divide-gray-200 ">
                      {cartItems.map(item => (
                        <div key={item.id} className="py-3 flex items-center space-x-4">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded"/>
                          <div className="flex-1">
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="flex items-center mt-1">
                              <button 
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center border rounded"
                              >
                                -
                              </button>
                              <span className="mx-2 text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-gray-500 hover:text-gray-700 w-6 h-6 flex items-center justify-center border rounded"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 text-sm hover:text-red-700 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}

                      <div className="py-3 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky top-0  bg-white border-t border-gray-200 shadow-xl z-10">
        <div className="container mx-auto">
          <nav className="flex justify-center space-x-6 py-4 text-sm font-semibold">
            <Link
              to="/allpromotions"
              className="text-red-500 hover:text-red-600 transition-colors duration-200"
            >
              ALL PROMOTIONS
            </Link>
            <Link
              to="/blackfriday"
              className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition-colors duration-200"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="mr-1 inline-block"
              >
                <line x1="19" y1="5" x2="5" y2="19"></line>
                <circle cx="6.5" cy="6.5" r="2.5"></circle>
                <circle cx="17.5" cy="17.5" r="2.5"></circle>
              </svg>
              BLACK FRIDAY
            </Link>
            <Link
              to="/"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              ABOUT
            </Link>
            <Link
              to="/sports-nutrition"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              SPORTS NUTRITION
            </Link>
            
            <Link
              to="/goals"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              GOALS
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              BLOGS
            </Link>
            <Link
              to="/brands"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              BRAND
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

