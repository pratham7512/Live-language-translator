import React, { useState } from 'react';
import languages from '../assets/languages';
import lang from '../assets/language.svg'
const Dropdown = (prop) => {
  // Your const array of languages


  // State to manage the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  return (
    <div className={`overflow-auto flex-col justify-center w-2/3 py-3 px-5 my-5 ${(!isDropdownVisible)?'rounded-full':'rounded-lg'} absolute text-white text-lg bg-black`}  onClick={() => setDropdownVisibility(!isDropdownVisible)}>
      <div class="flex justify-start">      
      <img class="w-5 mr-2" src={lang}></img>
      <button>
        {prop.selectedLang.name}
      </button></div>

      {isDropdownVisible && (
        <div class="w-full h-96">
          {languages.map((language, index) => (
            <div class="rounded-full w-full hover:bg-black" key={index} onClick={() => {
              prop.setSelectedLang(language)
              setDropdownVisibility(!isDropdownVisible)
            }}>
              {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
