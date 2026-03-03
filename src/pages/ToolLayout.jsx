import { Outlet } from "react-router-dom";
import ToolSidebar from "../components/toolSidebar/ToolSidebar";

const NAVBAR_HEIGHT = "4rem";
const FOOTER_HEIGHT = "5rem";

const ToolLayout = () => {
  return (
    <div className="flex w-full overflow-x-hidden bg-gray-50">
      <aside
        className="
          hidden 2xl:block 
          fixed left-0
          w-80
          bg-white border-r
          z-20
        "
        style={{
          top: NAVBAR_HEIGHT,
          height: `calc(100vh - ${NAVBAR_HEIGHT} - ${FOOTER_HEIGHT})`,
        }}
      >
        <ToolSidebar />
      </aside>

      <main className="w-full flex-1 px-4 sm:px-6 min-h-screen 2xl:ml-72 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default ToolLayout;