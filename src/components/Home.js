import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './Navbar';

export default function Home() {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    if (loading) {
        return <div className='flex h-screen items-center justify-center'><h1 className='text-2xl font-bold text-center'>Loading...</h1></div>;
    }

    return (
        <section className="bg-[#ffe0e9] dark:bg-[#ffe0e9]">
            <Navbar />
            <div className="flex flex-row overflow-x-auto">
            </div>
        </section>
    );
}
