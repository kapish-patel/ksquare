import { NavLink } from 'react-router-dom';

function ForgetPasswordPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">Reset Password</h2>

      {/* Description */}
      <p className="text-center text-gray-600 mb-6">
        We will email you a one-time code to reset your password. Please enter your registered email.
      </p>

      <form className="w-full max-w-sm space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Registered email:</label>
          <input
            id="email"
            type="email"
            aria-label="Email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your registered email"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Send Reset Code
          </button>
        </div>
      </form>

      {/* Login Link */}
      <div className="mt-6">
        <p className="text-sm text-gray-600">
          Remember your password?{' '}
          <NavLink to="/login" className="text-blue-600 hover:underline">
            Login Here
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default ForgetPasswordPage;
