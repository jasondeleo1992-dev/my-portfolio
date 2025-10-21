import React, { useState} from "react";

type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  description?: string;
  defaultShow?: boolean;
};

function Experience({ title, company, location, date, description, defaultShow = false }: Experience) {
  const [showDesc, setShowDesc] = useState(defaultShow);

  // Split description into sentences (handles . ! ?)
  const sentences = description
    ? description.match(/[^\\!\?]+[\.!\?]+/g)?.map(s => s.trim()) ?? [description]
    : [];
    
  return (
    <div
      className="mb-4 bg-white/5 rounded-lg border border-white/10 cursor-pointer transition hover:bg-white/10"
      onClick={() => setShowDesc((prev) => !prev)}
      tabIndex={0}
      role="button"
      aria-pressed={showDesc}
    >
      <div className="flex justify-between items-center backdrop-blur bg-white/5 rounded-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="flex-shrink-0 mb-4 md:mb-0 ">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="mb-2">
              <p className="text-lg text-white/70 mb-4">{company} | {location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
          <div className="flex-shrink-0 mb-4 md:mb-0 flex mt-8 md:mt-0">
            <p className="text-xl text-white/70 mb-4">{date}</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-6 h-6 ml-2 mt-1 text-white/70 transition-transform ${showDesc ? "rotate-180" : ""}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      </div>
      {showDesc && (
        <div className="flex flex-col gap-3 px-6 pb-6 pt-4">
          {sentences.length > 0 && (
            <ul className="list-disc pl-5 text-white/80 text-base space-y-2">
              {sentences.map((sentence, idx) => (
                <li key={idx}>{sentence}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Experience;