import { Info } from 'lucide-react';

const DecryptionInfoMessage = ({ toolName }) => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 mb-4 px-2">
      <div className="bg-indigo-100 border border-indigo-400 rounded-lg p-6 flex gap-4">
        {/* Icon Section */}
        <div className="flex items-center justify-center shrink-0 mt-1">
          <Info className="text-indigo-600" size={22} />
        </div>

        {/* Text Section */}
        <div className="text-indigo-900 text-[15px] leading-relaxed">
          <p className="mb-3">
            {toolName} is a one-way hashing algorithm. There is no direct method for {toolName} decryption. 
            <span className="font-bold"> {toolName} is decrypted by using Trial & Error methodology. </span> 
            It may take some time if either the text that will be decrypted or the character set that will be used for decryption is long.
          </p>
          
          <p className="text-indigo-800">
            <span className="font-bold">Note:</span> This service is used for educational purposes or in security research to demonstrate the importance of strong encryption.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecryptionInfoMessage;