
import { Outlet } from 'react-router-dom';
import Logo from '../../assets/quickbl_logo_no_bg_fixed.png';

function LoginLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="App Logo" className="w-108 h-auto" />
        </div>
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;
