import { useEffect } from "react";
import axios from "../utils/axios"
const Home = () => {

   const getdata = async ()=>  {
    try{
      const {data} = await axios.get('/comments')
      console.log(data);
 
    }catch(error){
        console.log(error);
        
    }
   }
  //  useEffect(() => {
  //    getdata()
  //  }, [])
   
  return (
    <div>Home</div>
  )
}

export default Home