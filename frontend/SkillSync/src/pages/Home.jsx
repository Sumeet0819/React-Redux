import { useEffect } from "react";
import axios from "../utils/axios"
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
const Home = () => {

  //  const getdata = async ()=>  {
  //   try{
  //     const {data} = await axios.get('/comments')
  //     console.log(data);
 
  //   }catch(error){
  //       console.log(error);
        
  //   }
  //  }
  // //  useEffect(() => {
  // //    getdata()
  // //  }, [])
   
  return (
    <div className=" h-screen bg-gray-950 px-2 py-4">
      <Header/>
      <Sidebar/>
    </div>

  )
}

export default Home