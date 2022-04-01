import React from 'react';

type Props = {
    handleCloseUserDropdownMenu: () => void,
    handleUserLogout: () => void,
}

const UserDropDownMenu: React.FC<Props> = (props: Props) => {
    const { handleCloseUserDropdownMenu, handleUserLogout } = props;

    // Refs
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    // useEffect
    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as HTMLElement)) {
                handleCloseUserDropdownMenu();
            }
        };

        // Bind the mouseup event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the mouseup event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[]);

    return (
        <div className='absolute h-screen w-screen top-0 left-0 hover:bg-gray-0' style={{ zIndex: 999 }}>
            <div className='sidebar-header pt-3 pb-3 pl-4 pr-4 flex flex-row justify-between items-cent h-fit w-64 relative'>
                <div
                    className='close-sidebar-bt p-1 invisible'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className='absolute w-52 h-36 bg-white shadow-sm top-12 p-2' ref={dropdownRef}>
                    <div className='text-xs text-gray-500'>email@g.com</div>
                    <div className='flex flex-row items-center justify-start mt-3 mb-3'>
                        <div className='bg-gray-400 font-semibold text-xl text-white h-10 w-10 rounded flex flex-row items-center justify-center'>
                            <span>{"Username".charAt(0)}</span>
                        </div>
                        <div className='flex flex-col ml-2 grow shrink'>
                            <span className='text-sm'>Username</span>
                            <span className='text-xs'>Personal</span>
                        </div>
                        <div className='justify-self-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>

                    <div className='border border-1 mb-3'></div>

                    <div>
                        <button 
                            onClick={handleUserLogout}
                            className='w-full h-fit hover:bg-red-600 hover:text-white text-gray-500 text-sm text-left pl-2 pt-1 pb-1 rounded transition-all'>
                            Log out
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UserDropDownMenu;