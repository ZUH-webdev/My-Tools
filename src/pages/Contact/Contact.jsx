import React from "react";
import { FiMail } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { openMail, updateMailContent } from "../../redux/slices/contactSlice";
import SupportSection from "../../components/SupportSection";

function Contact() {
  const dispatch = useDispatch();

  return (
    <div className=" flex justify-center px-20 mt-24 ">
      <div className="w-full max-w-3xl  space-y-12 gap-40  ">

        <div className="space-y-6 ">
          <div className="flex justify-center">
            <FiMail className="w-10 h-10 text-blue-400" />
          </div>

          <h2 className="text-4xl font-semibold">
            Contact Us
          </h2>

          <p className="text-gray-600 leading-relaxed">
            You can contact us via email for issues related to 10015.io.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => {
              dispatch(
                updateMailContent({
                  subject: "Support Request",
                  body: "Hello, I need help with your project!",
                })
              );
              dispatch(openMail());
            }}
            className="flex items-center gap-3
                       px-4 py-8 rounded-lg
                       bg-blue-500 text-white
                       hover:bg-blue-600 transition w-60 h-14 "
          >
            <FiMail className="w-5 h-5" />
            <span className="text-lg">contact@10015.io</span>
          </button>
        </div>

        <div className="pt-8">
          <SupportSection />
        </div>

      </div>
    </div>
  );
}

export default Contact;
