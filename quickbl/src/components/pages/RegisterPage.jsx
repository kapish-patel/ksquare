import GoogleIcon from '@mui/icons-material/Google';

function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="w-full max-w-sm space-y-6">
        {/* Full Name Input */}
        <div>
          <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="full-name"
            type="text"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full Name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* confirm Password */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password again"
          />
        </div>

        {/* Sign In Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Create Account
          </button>
        </div>


        {/* Sign in with Google */}
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="w-full bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
            onClick={() => alert("Signing in with Google...")}
          >
            <GoogleIcon />
            <span>Create Account with Google</span>
          </button>
        </div>

      </form>

      {/* Register Link */}
      <div className="mt-6">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
    );
}

export default RegisterPage;
