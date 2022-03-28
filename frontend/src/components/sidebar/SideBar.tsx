import React from 'react'

type Props = {
    isCloseSideBar: boolean,
    handleCloseSideBar: () => void
}

const SideBar: React.FC<Props> = (props: Props) => {
    const { isCloseSideBar, handleCloseSideBar } = props;
    

    return (
        <div className={`sidebar ${isCloseSideBar ? 'fixed -left-72 w-0' : 'flex flex-column left-0 w-72'}  top-0 h-screen bg-gray-100`}>
            <div className='sidebar-header pt-3 pb-3 pl-4 pr-4 flex flex-row justify-between items-center hover:bg-gray-200 h-fit w-full'>
                <div className=''>
                    Username
                </div>
                <div className=''>
                    <button 
                    onClick={handleCloseSideBar}
                    className='close-sidebar-btn hover:bg-gray-300 p-1 rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;