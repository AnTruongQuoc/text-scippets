import React from 'react'
import 'styles/components/sidebar/sidebar.scss'

type TextSnippet = {
    id: number;
    title: string;
    blocks: Array<{id: number, content: string}>;
}

type Props = {
    isCloseSideBar: boolean,
    handleCloseSideBar: () => void,
    textSnippetsData: Array<TextSnippet>,
    handleSelectTextSnippet: (index: number) => void,
}

const SideBar: React.FC<Props> = (props: Props) => {
    const { isCloseSideBar, handleCloseSideBar, handleSelectTextSnippet } = props;


    return (
        <div className={`sidebar ${isCloseSideBar ? 'fixed -left-72 w-0' : 'flex flex-col left-0 w-72 max-w-72'}  top-0 h-screen bg-gray-100`}>
            <div className='sidebar-header pt-3 pb-3 pl-4 pr-4 flex flex-row justify-between items-center hover:bg-gray-200 h-fit w-full'>
                <div className=''>
                    Username
                </div>
                <div className=''>
                    <button
                        onClick={handleCloseSideBar}
                        className='close-sidebar-btn hover:bg-gray-300 p-1 rounded'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='sidebar-body flex flex-col pl-4 pr-4 pt-4'>
                <div className='sidebar-feature mb-4'>
                    <div className='text-xs text-gray-500 font-bold pb-3'>Features</div>
                    <div className='flex flex-row justify-start items-center hover:cursor-pointer hover:gb-gray-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className='pl-2'>Find in TextSnippet</span>
                    </div>
                </div>

                <div className='sidebar-snippets mt-10'>
                    <div className='text-xs text-gray-500 font-bold pb-3'>Your Text Snippets</div>
                    {
                        props.textSnippetsData?.map((snippet, index) => {
                            return (
                                <div key={index} onClick={() => handleSelectTextSnippet(index)}
                                    className='hover:bg-gray-200 pt-1 pb-1 pl-2 pr-1 hover:rounded hover:cursor-pointer mt-1 mb-1'
                                >
                                    {snippet.title}
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default SideBar;