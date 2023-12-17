import React from 'react';
import ReactDOM from 'react-dom/client'
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import Hero2 from './src/components/Hero2';
import About from './src/components/About';
import Democard from './src/components/Democard';
import Carousel from './Carousel';
import Footer from './src/components/Footer';
import ExerciseList from './src/components/ExerciseList';
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import ParticularExercise from './src/components/ParticularExercise';
import DetailExercise from './src/components/DetailExercise';
import ScrollToTop from './src/components/ScrollToTop';
import { Provider } from 'react-redux';
import appStore from './src/utils/appStore';

const root=ReactDOM.createRoot(document.getElementById("root"));

function App()
{
    return(
        <>
            <Provider store={appStore}>
                <Navbar/>
                <Outlet/>
                <ScrollToTop/>
                <Footer/>
            </Provider>
        </>
    )
}

function Home()
{
    return(
        <>
            <Hero/>
            <Hero2/>
            <About/>
            <Democard/>
            <Carousel/>
        </>
    )
}

const appLayout=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/workout",
                element:<ExerciseList/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/bodyPart/:name",
                element:<ParticularExercise/>
            },
            {
                path:"/exercise/:id",
                element:<DetailExercise/>
            }
        ]
    }
])

root.render(<RouterProvider router={appLayout}></RouterProvider>)