import { SendHorizontal, X, Bug } from 'lucide-react';
import React from 'react';
import { createPortal } from 'react-dom';

const BugReportModal = ({ isOpen, onClose, toolName }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* Background overlay click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header Section */}
        <div className="p-8 pb-0">
          <div className="flex items-center gap-2 mb-4">
            {/* Design intact: icon and title */}
            <span className="text-2xl text-slate-800"><Bug size={24} strokeWidth={2.5}/></span>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Bug Report</h2>
          </div>
          
          <div className="mb-6">
            <p className="text-lg font-semibold text-slate-700">
              Tool: <span className="font-normal text-slate-500">{toolName}</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">Please describe the issue.</p>
          </div>

          {/* Text Area */}
          <div className="relative">
            <textarea
              autoFocus
              placeholder="Description*"
              className="w-full h-40 p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Footer / Submit Button */}
        <div className="p-8 pt-6 flex justify-end">
          <button 
            className="flex items-center gap-2 bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:shadow-indigo-200 active:scale-95"
            onClick={onClose}
          >
            <span><SendHorizontal className='h-4 w-4'/></span> Submit
          </button>
        </div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors p-1"
        >
          <X className='h-6 w-6 stroke-[2.5px]'/>
        </button>
      </div>
    </div>,
    document.body
  );
};

export default BugReportModal;