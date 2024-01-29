import { useEffect, useState } from 'react'
import languages from './assets/languages';
import swap from './assets/swap.svg'
import './App.css'
import Dropdown from './components/dropdown'

function App() {
  const [selectedLang,setSelectedLang]=useState(languages[0]);
  const [selectedLang1,setSelectedLang1]=useState(languages[0]);
  const [input, setInput]=useState("");
  const [output, setOutput]=useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${selectedLang.code}&tl=${selectedLang1.code}&dt=t&q=${encodeURI(input)}`;
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setOutput(json[0].map((item) => item[0]).join(""));
      } catch (error) {
        console.error("Error fetching translation:", error);
      }
    };
  
    fetchData();
  }, [input, selectedLang, selectedLang1]);
  return (
<div class="flex justify-center items-center bg-black h-screen">
  <div class="flex justify-center w-4/5 h-5/6 bg-black">
    <div class="w-5/12 flex-col justify-around relative">
      <div class="flex justify-center"><Dropdown selectedLang={selectedLang} setSelectedLang={setSelectedLang}/></div>
      <div class="flex justify-center items-center bg-gray h-5/6 rounded-3xl">
      <textarea class=" focus:outline-none w-full h-2/3 mt-12 mx-10 resize-none bg-gray text-white text-lg" placeHolder="Enter your text here" onChange={function(e) {
          const value = e.target.value;
          setInput(e.target.value);
        }}
></textarea>
      </div> 
    </div>
    <img class="w-10 mt-5 mb-auto" src={swap} onClick={()=>{
      setSelectedLang(selectedLang1)
      setSelectedLang1(selectedLang)
    }}></img>
    <div class="w-5/12 flex-col justify-around relative">
      <div class="flex justify-center"><Dropdown selectedLang={selectedLang1} setSelectedLang={setSelectedLang1}/></div>
      
      <div class="flex justify-center items-center bg-gray h-5/6 rounded-3xl">
      <div class="w-full h-2/3 mt-12 mx-10 resize-none bg-gray text-white text-lg">{(input)?output:""}</div>
      </div> 
    </div>
  </div>
</div>
  )
}

export default App

