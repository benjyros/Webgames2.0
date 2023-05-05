import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

export default function Home() {
    const [webpages, setWebpages] = useState([
        { webpage: "TicTacToe", description: "Spiele TicTacToe mit deinem Freund." },
        { webpage: "Hangman", description: "Errate Wörter - Hangman." },
        { webpage: "Speedclicker", description: "Klicke so schnell wie du kannst." },
        { webpage: "Reactionclicker", description: "Teste deine Reflexe." },
    ]);
    const location = useLocation();

    const getLinks = webpages.map((webpage, index) => {
        const location = "/" + webpage.webpage.toLocaleLowerCase();
        const src = `${window.location.origin}/Webgames2.0/images/${webpage.webpage.toLocaleLowerCase()}.png`;

        return (
            <Link className='group transition duration-200 ease-in-out flex text-black items-center justify-center rounded bg-[#ffe0e9] hover:bg-[#eb8faf] h-64 p-10' to={location} key={index}>
                <div>
                    <img className='mx-auto w-[75px] h-[75px] transition duration-200 ease-in-out group-hover:scale-105' src={src} alt={webpage.webpage} />
                    <hr className='m-2 border-0 bg-gray-300 h-px' />
                    <p className='transition duration-500 ease-in-out group-hover:scale-105 text-2xl font-medium m-2'>{webpage.webpage}</p>
                    <p className='transition duration-500 ease-in-out group-hover:scale-105 text-sm m-2'>{webpage.description}</p>
                </div>
            </Link>
        );
    });

    const getVideos = webpages.map((webpage, index) => {
        const src1 = `${window.location.origin}/Webgames2.0/videos/${webpage.webpage.toLocaleLowerCase()}.mp4`;
        const src2 = `${window.location.origin}/Webgames2.0/videos/${webpage.webpage.toLocaleLowerCase()}.ogg`;
        const src3 = `${window.location.origin}/Webgames2.0/videos/${webpage.webpage.toLocaleLowerCase()}.webm`;

        return (
            <div className='flex text-black items-center justify-center rounded bg-[#ffe0e9] p-5' key={index}>
                <div>
                    <p className='text-xl md:text-2xl xl:text-4xl font-medium'>{webpage.webpage.toUpperCase()}</p>
                    <hr className='m-2 border-0 bg-gray-300 h-px' />
                    <video className='w-[350px] h-[200px] md:w-[500px] md:h-[350px] xl:w-[650px] xl:h-[500px]' controls>
                        <source src={src1} type="video/mp4" />
                        <source src={src2} type="video/ogg" />
                        <source src={src3} type="video/webm" />
                    </video>
                </div>
            </div>
        );
    });


    return (
        <section className="bg-[#fff5f8] select-none">
            <Navbar />
            <div className="w-2/3 mx-auto mt-24">
                <p className='text-4xl text-black font-medium mb-4 text-left'>Twäwis-Games</p>
                <hr className='mt-4 mb-6 border-0 bg-gray-300 h-px' />
                <div className='grid grid-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {getLinks}
                </div>
            </div>
            <div className="w-2/3 mx-auto mt-24 mb-36">
                <p className='text-4xl text-black font-medium mb-4 text-left'>Twäwis-Demos</p>
                <hr className='m-2 border-0 bg-gray-300 h-px' />
                <div className='grid grid-auto grid-cols-1 gap-4'>
                    {getVideos}
                </div>
            </div>
            <Footer />
        </section>
    );
}
