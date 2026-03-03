import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/slices/authSlice";
import { logout } from "../authProviders";
import { FiUser, FiTool, FiShoppingBag, FiLogOut } from "react-icons/fi";

export default function ProfileMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);


  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, onClose]);

  if (!isOpen || !user) return null;

  // Helper function to get user's initial
  const getUserInitial = (name) => {
    if (!name) return "U";
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    // Return first letter of first name and first letter of last name
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };

  const handleSignOut = async () => {
    try {
      await logout();
      dispatch(clearUser());
      navigate("/");
      onClose();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div
      ref={menuRef}
      className="absolute top-15 right-6 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-1000"
    >
      {/* Profile Section */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white font-semibold text-xl border-2 border-indigo-600 flex-shrink-0">
            {getUserInitial(user.name)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg truncate">
              {user.name || "User"}
            </h3>
            <p className="text-sm text-gray-600 truncate">{user.email}</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2">
        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition"
        >
          <FiUser className="text-lg text-indigo-600" />
          <span className="font-medium">Profile</span>
        </Link>

        <Link to="/tool-request" onClick={onClose} className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition">
          <FiTool className="text-lg text-indigo-600" />
          <span className="font-medium">Request a tool</span>
        </Link>

        <Link to="/orders" onClick={onClose} className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition">
          <FiShoppingBag className="text-lg text-indigo-600" />
          <span className="font-medium">Orders</span>
        </Link>
      </div>
      

      {/* Sign Out Button */}
      <div className="border-t border-gray-200 p-2">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded transition font-medium"
        >
          <FiLogOut className="text-lg" />
          Sign out
        </button>
      </div>
    </div>
  );
}
