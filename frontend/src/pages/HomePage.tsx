import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'redux/hook';
import { selectUserIsLoggedIn } from 'redux/selectors';
import 'styles/pages/homepage.scss';

const HomePage: React.FC = () => {

    // Selector
    const isLogin = useAppSelector(selectUserIsLoggedIn);

    return (
        <div className='flex flex-row items-center h-screen w-screen relative homepage-glass'>

            <div className='w-screen h-fit absolute top-0 left-0 p-4 z-50'>
                {
                    !isLogin ? 
                        <Link to='/login' className='bg-blue-500 hover:bg-blue-600 text-white font-medium pt-2 pb-2 pl-6 pr-6 rounded-full float-right'>Login</Link> 
                    : 
                        <Link to='/' className='bg-blue-500 hover:bg-blue-600 text-white font-medium pt-2 pb-2 pl-6 pr-6 rounded-full float-right'>Dashboard</Link>
                }
            </div>

            <div className='flex flex-col items-center justify-center w-full z-50'>
                <div className='flex flex-row'>
                    <span className='text-blue-600 text-5xl sm:text-7xl font-bold'>Welcome</span>
                    <span className='text-5xl sm:text-7xl font-bold ml-4'>to</span>
                </div>

                <svg viewBox="0 0 1320 300" className='text-snippet'>
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle"  fontFamily="Inter">Text Snippet</text>
                </svg>
            </div>

            <div className='homepage-glass-cover h-screen w-screen absolute top-0 left-0'>
                <div className='relative h-screen w-screen overflow-hidden'>
                <div className='cover-gradient-1'></div>
                <div className='cover-gradient-2'></div>
                <div className='cover-gradient-3'></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

