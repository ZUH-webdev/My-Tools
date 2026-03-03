import { useState } from "react";
import { Share2, Heart, Bug, Send } from "lucide-react";
import BugReportModal from "./BugReportModal";

const ToolsDetailPageHeader = ({ title, icon }) => {
  const [showBugModal, setShowBugModal] = useState(false);

  const actions = [
    {
      label: "Share",
      icon: <Share2 size={16} />,
      onClick: () => console.log("Share clicked"),
    },
    {
      label: "Add to Favs",
      icon: <Heart size={16} />,
      onClick: () => console.log("Added to favorites"),
    },
    {
      label: "Report Bug",
      icon: <Bug size={16} />,
      onClick: () => setShowBugModal(true),
    },
  ];

  return (
    <>
      <div className="w-full bg-gray-50 pt-14 md:pt-22 pb-2">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">

          <div className="flex items-center gap-3">
            <img src={icon} alt="tool-icon" className="w-8 h-8" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 font-space-grotesk">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="inline-flex items-center gap-1 sm:gap-2 rounded-full px-3 sm:px-4 py-2 text-sm font-semibold text-gray-500 font-manrope border border-gray-300 bg-white hover:bg-gray-100 transition-all duration-200"
              >
                {action.icon}
                <span className="hidden sm:inline">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* REUSABLE MODAL COMPONENT */}
      <BugReportModal
        isOpen={showBugModal}
        onClose={() => setShowBugModal(false)}
        toolName={title}
      />
    </>
  );
};

export default ToolsDetailPageHeader;