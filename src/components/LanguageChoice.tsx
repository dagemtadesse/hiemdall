import React from "react";

const LanguageChoice = () => {
  return (
    <ul className="py-2 px-4 md:px-0 flex text-sm font-normal items-center justify-between absolute bottom-0 w-full md:w-auto md:relative">
      <li className="flex items-center">
        English
        <span className="bg-gray-900 p-2 ml-2 inline-block rounded-full"></span>
      </li>
      <li className="ml-8 flex text-gray-500">Afan Oromo</li>
      <li className="ml-8 text-gray-500">Amharic</li>
    </ul>
  );
};

export default LanguageChoice;
