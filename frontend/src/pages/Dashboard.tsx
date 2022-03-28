import SideBar from 'components/sidebar/SideBar';
import React from 'react';
import 'styles/components/sidebar/sidebar.scss';

const Dashboard: React.FC = () => {
    const [isCloseSideBar, setIsCloseSideBar] = React.useState<boolean>(false);

    const handleCloseSideBar = () => {
        setIsCloseSideBar(true);
    }

    const handleOpenSideBar = () => {
        setIsCloseSideBar(false);
    }

    return (
        <div className='w-screen h-screen flex flex-row'>
            <SideBar
                isCloseSideBar={isCloseSideBar}
                handleCloseSideBar={handleCloseSideBar}
            />

            {/* Main Section */}
            <div className='h-full w-fit'>
                <div className='mainsection-header flex flex-row items-center pt-3 pb-3 pl-4 pr-4'>
                    {
                        isCloseSideBar &&
                        <button onClick={handleOpenSideBar}
                            className='hover:bg-gray-300 p-1 rounded'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    }
                    <div className='pl-4'>Title</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

