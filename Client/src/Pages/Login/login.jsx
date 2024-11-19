import React from "react";
import { FcGoogle } from "react-icons/fc"; // Make sure to install react-icons

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email or Mobile Number
            </label>
            <input
              type="text"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email or mobile number"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

          {/* Google Login */}
          <button
            type="button"
            onClick={() => {
              const googleAuthUrl =
                "https://accounts.google.com/o/oauth2/v2/auth";
              const params = {
                client_id: "YOUR_GOOGLE_CLIENT_ID", // You'll need to replace this with your actual Google Client ID
                redirect_uri: window.location.origin + "/auth/google/callback",
                response_type: "code",
                scope: "email profile",
                prompt: "select_account",
              };
              const queryString = new URLSearchParams(params).toString();
              window.location.href = `${googleAuthUrl}?${queryString}`;
            }}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition duration-200"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>
        </form>

        {/* Benefits Section */}
        <div className="mt-8 space-y-4">
          <h3 className="font-medium text-gray-700">What you'll get:</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span>✓</span> Check your past orders
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span> Track your orders
            </li>
            <li className="flex items-center gap-2">
              <span>✓</span> Access saved products
            </li>
          </ul>
        </div>

        {/* Terms and Support */}
        <div className="mt-8 space-y-4 text-sm text-gray-500">
          <p>
            By continuing, you agree to BNS{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            Facing issue with Login? Email us at{" "}
            <a
              href="mailto:friends@bns.com"
              className="text-blue-600 hover:underline"
            >
              friends@bns.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
