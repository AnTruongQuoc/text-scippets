import React from 'react';
import {useNavigate} from 'react-router-dom';

import GoogleIcon from '@mui/icons-material/Google';
import Validation from 'utils/validation';

import { useAppDispatch, useAppSelector } from 'redux/hook';
import { demoLogin } from 'redux/actions';
import { selectUserIsLoggedIn } from 'redux/selectors';

const mockEmail = ['truongquocan123@gmail.com', 'demo@yoo.com']

const LoginPage: React.FC = () => {
    
    // Dispatch
    const loginDispatch = useAppDispatch();
    const isAuth = useAppSelector(selectUserIsLoggedIn);

    // Navigate to another page (router)
    const navigate = useNavigate();
    
    // States
    const [btnContent, setBtnContent] = React.useState<string>('Continue with Email');
    const [isShowCodeInput, setIsShowCodeInput] = React.useState<boolean>(false);
    const [isShowPasswordInput, setIsShowPasswordInput] = React.useState<boolean>(false);
    const [isCheckedEmail, setIsCheckedEmail] = React.useState<boolean>(false);
    const [checkedEmail, setCheckedEmail] = React.useState<string>('');
    const [currEmail, setCurrEmail] = React.useState<string>('');

    const [notification, setNotification] = React.useState<string>('');

    React.useEffect(() => {
        if(isAuth) {
            navigate('/dashboard');
        }
    }, [isAuth, navigate]);

    // Functions
    const handleLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password?: { value: string }; // Optional: password for Login
            code?: { value: string };     // Optional: code for Register
        };

        const email = target.email.value;
        const password = target.password?.value;
        const code = target.code?.value;

        if (!Validation.isValidEmail(email)) return;

        if (!isCheckedEmail && mockEmail.includes(email)) {
            setIsCheckedEmail(true);
            setBtnContent('Continue with password');
            setIsShowPasswordInput(true);
            setCheckedEmail(email);
        }

        if (!isCheckedEmail && !mockEmail.includes(email)) {
            setIsCheckedEmail(true);
            setBtnContent('Create new accounnt');
            setIsShowCodeInput(true);
        }

        if (email && password) {
            console.log('Login with password', email, password);
            // Call login API
            loginDispatch(demoLogin({email, password}));

            //setNotification('Login failed');
        }

        if (email && code) {
            console.log('Register with code', email, code);
            //Call register API
            setNotification('Register failed');
        }
    }

    /* Handle onChange in Email input 
        - If inputEmail is different from checkedEmail, close everything
    */
    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;

        if (email !== checkedEmail) {
            setAllNeededStatedToDefault();
        }

        setCurrEmail(email);
    }

    const handleClearCurrentEmail = (e: React.MouseEvent) => {
        e.preventDefault();
        
        // Clear current email
        setCurrEmail('');

        // Set all states to default
        setAllNeededStatedToDefault();
    }

    const setAllNeededStatedToDefault = () => {
        setBtnContent('Continue with Email');
        setIsShowPasswordInput(false);
        setIsShowCodeInput(false);
        setIsCheckedEmail(false);
        setCheckedEmail('');
        setNotification('');
    }

    return (
        <div className='login-page container mx-auto h-screen'>
            <div className='login-header p-3 fixed w-full'>
                <h1 className='text-xl font-semibold'>TextSnippet</h1>
            </div>
            <div className='login-body w-full h-full flex flex-row justify-center'>
                <div className='w-80 flex flex-col items-center justify-center'>
                    <h2 className='text-center font-bold text-5xl mb-5'>Log in</h2>
                    <div className='w-full'>
                        <button className='w-full p-2 text-white text-sm font-medium bg-orange-600 hover:bg-orange-700 border-1 border-black rounded'>
                            <GoogleIcon sx={{ fontSize: 18, marginRight: 1 }} />
                            Login with Google
                        </button>
                        <div className='w-auto bg-gray-300 w-100 h-px mt-4 mb-4'></div>

                        <form
                            className='w-full flex flex-col items-center'
                            onSubmit={handleLogin}
                        >
                            <div className='w-full mb-4'>
                                <label htmlFor='email' className="text-sm text-gray-400 after:content-['*'] after:ml-0.5 after:text-red-500">Email</label>
                                <div className='relative w-full'>
                                    <input
                                        className='w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'
                                        type='email' id='email' name='email' placeholder='welcome@textsnippet.com' autoComplete='email'
                                        value={currEmail}
                                        onChange={handleChangeEmail}
                                    />
                                    {
                                        currEmail &&
                                        <button type="button" className='absolute right-2 top-1/4' onClick={handleClearCurrentEmail}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 decoration-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    }
                                </div>
                            </div>

                            {
                                isShowPasswordInput &&
                                <div className='w-full mb-4'>
                                    <label htmlFor='password' className="text-sm text-gray-400 after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                                    <input
                                        className='w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'
                                        type='password' id='password' name='password' placeholder='Enter your password' autoComplete='current-password'
                                    />
                                </div>
                            }
                            {
                                isShowCodeInput &&
                                <div className='w-full mb-4'>
                                    <label htmlFor='signup-code' className="text-sm text-gray-400 after:content-['*'] after:ml-0.5 after:text-red-500">Sign up code</label>
                                    <input
                                        className='w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1'
                                        type='text' id='signup-code' name='code' placeholder='Enter your signup code' autoComplete='code'
                                    />
                                </div>
                            }

                            <button type="submit" className='w-full text-sm font-medium text-red-500 rounded p-2 border border-orange-400 bg-red-50 hover:bg-red-100'>{btnContent}</button>
                        </form>

                        {
                            (notification !== '') &&
                            <div className='text-sm text-red-600 text-center pt-4'>
                                {notification}
                            </div>
                        }

                        <div className='text-sm text-gray-400 text-center underline underline-offset-1 pt-4'>
                            Forgot password?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

