import React, { useState, useEffect } from 'react';
import '../../style/Login.Page.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

export default function Login_Page() {
    const [time, setTime] = useState(new Date());
    const [kirish, setKirish] = useState(true);
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [clickTime, setClickTime] = useState(null);
    const [mass, setMass] = useState([]);
    const dispatch = useDispatch()


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // console.log(mass); // Переместили console.log сюда

        return () => {
            clearInterval(timer);
        };
    }, [mass]); // Добавили зависимость mass

    const formatTime = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    };

    const handleKirishClick = () => {
        setKirish(false);
        const currentTime = new Date().toLocaleTimeString();
        setClickTime(currentTime);
        dispatch({
            type: "add", payload: {
                name: userName,
                surname: userSurname,
                time: currentTime
            }
        })
    };

    return (
        kirish ? (
            <div className="login_component">
                <div className='login_page'>
                    <p className='login_time'>Time: <br />{formatTime(time)}</p>
                    <p className='login_logo'>KIRISH</p>
                    <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Ismingizni kiriting' />
                    <input onChange={(e) => setUserSurname(e.target.value)} type="text" placeholder='Familiyangizni kiriting' />
                    <input type="password" placeholder='Parolni kiriting' />
                    <br />
                    <a href='#' className='login_save'>Eslab qolish</a>
                    <br />
                    <button onClick={handleKirishClick}>KIRISH</button>
                </div>
            </div>
        ) : (
            <Link className='Link' to={"/exit"}>
                <div className='succesful'>
                    Successful
                </div>
            </Link>
        )
    );
};
