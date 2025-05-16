import React, { useState, useEffect } from "react";
import { filterData, apiUrl } from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [option, setOptions] = useState([]); // Initial state
  const [loading,setLoading] = useState(true);
  const [category,setCategory] =useState(filterData[0].title);
  
  async function fetchData() {
    //jabtak data aa raha tabkat loading dikhayenge
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setOptions(output.data);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
    //data fetch ho gaya to band kar denge loading
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function removeTitle(title){
    setCategory(title);
    console.log(category);
  }  

  return (
    <div className="APP">
      <div>
      <Navbar />
      </div>
      
      <div>
      <Filter datas={filterData} 
      getTitle={removeTitle} />
      </div>

      <div>
      {loading ? (<Spinner></Spinner >) : (
        <Cards data={option} category={category}/>
      )  
      }
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
