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
            <Link className='group flex text-black items-center justify-center rounded bg-[#ffe0e9] hover:bg-[#eb8faf] h-60' to={location} key={index}>
                <div className='group-hover:scale-105'>
                    <img className='mx-auto w-[75px] h-[75px]' src={src} alt={webpage.webpage} />
                    <hr className='m-2 border-0 bg-gray-300 h-px' />
                    <p>{webpage.webpage}</p>
                    <p>{webpage.description}</p>
                </div>
            </Link>
        );
    });

    return (
        <section className="bg-[#fff5f8] select-none">
            <Navbar />
            <div className="w-2/3 mx-auto h-screen mt-24">
                <p className='text-4xl text-black font-medium mb-4 text-left'>Twäwis-Games</p>
                <hr className='m-2 border-0 bg-gray-300 h-px' />
                <div className='grid grid-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {getLinks}
                </div>
            </div>
            <div className="w-2/3 mx-auto h-screen">
                <p className='text-4xl text-black font-medium mb-4 text-left'>Twäwis-Demos</p>
                <hr className='m-2 border-0 bg-gray-300 h-px' />
                <div className='grid grid-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {getLinks}
                </div>
            </div>
            <Footer />
        </section>
    );
}
