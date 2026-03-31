import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../authProviders";
import { clearUser } from "../../redux/slices/authSlice";
import { FiMail } from "react-icons/fi";
import profile from "../../assets/profile.png";
import CategoryCard from "../../components/categorycard/CategoryCard";
  

function Profile() {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const favourites = useSelector(
    (state) => state.favourites.items
  );
  const tabs = [
  { id: "favorites", label:  `Favorite Tools (${favourites.length})` },
  { id: "comments", label: "Comments" },
  { id: "requests", label: "Tool Requests" },
  { id: "bugs", label: "Bug Reports" },
  { id: "products", label: "Products" }
];  

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("favorites");
 
  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearUser());
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-16">Loading...</p>;
  if (!user) return <p className="text-center mt-16">User not logged in</p>;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 flex flex-col items-center gap-12 pt-20">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
        <img
          src={user.photoURL || profile}
          alt="Profile"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
        />

        <div className="flex flex-col text-center sm:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold">
            {user?.displayName || "Anonymous"}
          </h2>

          <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 mt-1 text-sm sm:text-base">
            <FiMail className="w-4 h-4 sm:w-5 sm:h-5" />
            <p>{user.email || "No email"}</p>
          </div>
        </div>

        <div className="sm:ml-auto">
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md">
        <div className="sm:hidden p-4 border-b">
          <label className="block text-sm text-gray-500 mb-1">
            Sections
          </label>
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {tabs.map(tab => (
              <option key={tab.id} value={tab.id}>
                {tab.label}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden sm:flex border-b">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-center font-medium transition
                ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8 text-gray-500 text-sm sm:text-base min-h-60
        ">
          {activeTab === "favorites" && (
  favourites.length === 0 ? (
    <p>You have not added any favorite tools yet.</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
      {favourites.map((product) => (
        <CategoryCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
)}
          {activeTab === "comments" && "You have not added any comments yet."}
          {activeTab === "requests" && "You have not submitted any tool requests yet."}
          {activeTab === "bugs" &&  "You have not reported any bugs yet."}
          {activeTab === "products" && "You have not added any products yet."}
        </div>
      </div>
    </div>
  );
}

export default Profile;

