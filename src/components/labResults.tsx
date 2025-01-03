import React from "react";
import Image from "next/image";

interface LabResultsProps {
  results: string[];
}

const LabResults = ({ results }: LabResultsProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 space-y-4">
      <h2 className="text-2xl font-extrabold">Lab Results</h2>

      <div className="max-h-[300px] overflow-y-auto pr-2">
        {results.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between hover:bg-[#F6F7F8] p-4 mb-3 last:mb-0"
          >
            <span className="text-gray-900">{result}</span>
            <button className="hover:opacity-80">
              <Image
                src="/assets/icons/download.svg"
                alt="Download"
                width={24}
                height={24}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
