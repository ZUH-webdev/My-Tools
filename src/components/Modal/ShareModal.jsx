import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { PiShareNetworkFill } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaCopy,
} from "react-icons/fa";
import { closeShareModal } from "../../redux/slices/modalSlice";

const ShareModal = () => {
  const dispatch = useDispatch();

  const { isOpen, title } = useSelector((state) => state.share);

  const [activeTab, setActiveTab] = useState("category");

  if (!isOpen) return null;
  const pageTitle = document.title;
  const currentPageUrl = window.location.href;
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentPageUrl
      )}`,
      "_blank"
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        currentPageUrl
      )}&text=${encodeURIComponent(pageTitle)}`,
      "_blank"
    );
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        currentPageUrl
      )}`,
      "_blank"
    );
  };

  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      pageTitle
    )}&body=${encodeURIComponent(currentPageUrl)}`;
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(currentPageUrl);
    alert("Link copied");
  };
  const shareActions = [
    shareFacebook,
    shareTwitter,
    shareLinkedIn,
    shareEmail,
    copyLink,
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40  "
      onClick={() => dispatch(closeShareModal())}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-5 h-96 flex flex-col justify-center items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex bg-indigo-50 rounded-xl p-1 mb- h-10 w-[90%]">
          <button
            onClick={() => setActiveTab("category")}
            className={`flex items-center justify-center flex-1  py-2 text-sm font-semibold rounded-lg transition gap-1.5
              ${
                activeTab === "category"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-100"
              }
            `}
          >
            <IoSettingsOutline className="h-4 w-4" />{" "}
            <span> Share Category</span>
          </button>

          <button
            onClick={() => setActiveTab("page")}
            className={`flex items-center justify-center flex-1  py-2 text-sm font-semibold rounded-lg transition gap-1.5
              ${
                activeTab === "page"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-indigo-600 hover:bg-indigo-100"
              }
            `}
          >
            <IoHomeOutline className="h-4 w-4" /> Share 10015
          </button>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 text-center h-52 w-[90%] flex justify-center items-center flex-col my-9 bg-gray-200 gap-2">
          <p className="text-sm text-gray-500 mb-1">
            You are currently sharing
          </p>

          <h3 className="text-lg font-semibold text-black mb-6">{title}</h3>

          <div className="flex justify-center  ">
            <PiShareNetworkFill className="h-8 w-8 text-blue-700" />
          </div>

          <div className="flex justify-center gap-3">
            {[
              <FaFacebookF />,
              <FaTwitter />,
              <FaLinkedinIn />,
              <FaEnvelope />,
              <FaCopy />,
            ].map((Icon, i) => (
              <button
                key={i}
                onClick={shareActions[i]}
                className="w-11 h-11 flex items-center justify-center rounded-full
                           bg-indigo-600 text-white text-lg
                           hover:bg-indigo-700 transition
                           active:scale-95"
              >
                {Icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
