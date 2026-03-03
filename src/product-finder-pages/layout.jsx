import Sidebar from '../ProductFinderComponents/sidebar'
import { Outlet } from 'react-router-dom'
import { useApiContext } from '../contexts/api-context';

const Layout = () => {
  const { errors } = useApiContext();

  return (
    <div className="min-h-screen flex bg-gray-50">
      
      <Sidebar className={'lg:block hidden'} />

      {/* Main Content */}
      <main className="lg:flex-1 block lg:p-6 lg:ml-80">
        {errors && (
          <div className="text-red-500 mb-4">
            Error: {errors}
          </div>
        )}
        <Outlet />
      </main>

    </div>
  );
}

export default Layout;
