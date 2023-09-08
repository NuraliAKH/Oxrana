import React, { useState, useEffect } from 'react'
import '../../style/Login.Page.css'
import { Link } from 'react-router-dom';
export default function Exit_Page() {

    const [time, setTime] = useState(new Date());
    const [chiqish, setChiqish] = useState(true);
    const [chiqishTime, setChiqishTime] = useState(null);
    const [userName, setUserName] = useState('');
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);


        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    };
    const handleChiqishClick = () => {
        setChiqish(false)
        const currentTime = new Date().toLocaleTimeString();
        setChiqishTime(currentTime)
    }
    return (
        chiqish ? (
            <div className="login_component">
                <div className='login_page'>
                    <p className='login_time'>Time: <br />{formatTime(time)}</p>
                    <p className='login_logo'>CHIQISH</p>
                    <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Ismingizni kiriting' />
                    <input type="password" placeholder='Parolni kiriting' />
                    <br />
                    <a href='#' className='login_save'>Eslab qolish</a>
                    <br />
                    <button onClick={handleChiqishClick}>CHIQISH</button>
                </div>
            </div>
        ) : (
            <Link className='Link' to={"/"}>
                <div className='succesful'>
                    Successful
                </div>
            </Link>
        )
    )
}
