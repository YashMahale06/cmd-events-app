import React,{useState,useEffect} from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Admin/Home/Home';
import ServiceImages from '../Admin/ServiceImages/ServiceImages';
import AddEvent from '../Admin/AddEvent/AddEvent';
import AddVideos from '../Admin/AddVideos/AddVideos';
import { Login } from '../Admin/Login/Login';
import { toast } from 'react-toastify';

import UserHome from '../User/Home/Home';
import 'react-toastify/dist/ReactToastify.css';
import Carousal from '../User/Components/HomeComponents/Carousal/Carousal';
import Video from '../User/Components/HomeComponents/Video/Video';
import AllServices from '../User/Services/AllServices/AllServices';
import WeddingService from '../User/Services/EachServices/WeddingService';
import BabyShowerService from '../User/Services/EachServices/BabyShowerService';
import BallonService from '../User/Services/EachServices/BallonService';
import SpecialEntriesService from '../User/Services/EachServices/SpecialEntriesService';
import CorporateService from '../User/Services/EachServices/CorporateService';
import BirthdayService from '../User/Services/EachServices/BirthdayService';
import ServiceGallery from '../User/Services/AllServices/ServiceGallery/ServiceGallery';
import MainServiceGallery from '../User/Services/AllServices/ServiceGallery/MainServiceGallery';
import Gallery from '../User/Gallery/Gallery';
import RecentEvents from '../User/RecentEvents/RecentEvents';
import About from '../User/About/About';
import Contact from '../User/Contact/Contact';



const Router = () => {
  return (
    <Routes>
        {/* Admin Routes */}
       
        <Route path="/admin/home" element={<Home/>} />
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/service-images" element={<ServiceImages/>}/>
        <Route path="/admin/addevent" element={<AddEvent/>}/>
        <Route path="/admin/addvideo" element={<AddVideos/>}/>



        {/* User   Routes */}

        <Route path= '/home' element={<UserHome/>}/>
        <Route path='/services' element={<AllServices/>} />

        <Route path='/services/wedding' element={<WeddingService/>}/>
        <Route path='/services/ballon' element={<BallonService/>}/>
        <Route path='/services/special_entries' element={<SpecialEntriesService/>}/>
        <Route path='/services/corporate' element={<CorporateService/>}/>

        <Route path='/gallery/:mainservice/:subservice' element={<ServiceGallery/>}/>
        <Route path='/gallery/:mainservice' element={<MainServiceGallery/>}/>

        <Route path='/gallery' element={<Gallery/>}/>

        <Route path='/recent_events' element={<RecentEvents/>}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/contact' element={<Contact/>}/>

        <Route path='/carousal' element={<Carousal/>}/>


        <Route path='/' element={<Video/>}/>


    </Routes>
  )
}

export default Router