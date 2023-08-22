import axios from 'axios';
import './App.css'
import Navbar from './components/Navbar';
import {useDispatch, useSelector} from 'react-redux';
import { addData } from "./features/getSlice";
import Data from "./pages/Data";
import { useEffect } from "react";
import { getMobileList } from './services/mobileAction';

function App() {
 const dispatch = useDispatch();
 const apiData = useSelector((state) => state.phoneReducer.phoneList);
  // async function getApi(){
  //   const res = await  axios.get('https://dummyjson.com/products');
  //   const data =  await res.data.products;
  //   dispatch(addData(data))
  // }
 console.log(apiData, '>>>>>>>>>>>>>>>>>>>>>>>>');
useEffect(() => {
  console.log('LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL');
   dispatch( getMobileList())
},[])
  return (
    <div className="App">
        <Navbar />
        <Data apiData = {apiData} />
  </div>
  )
}

export default App
