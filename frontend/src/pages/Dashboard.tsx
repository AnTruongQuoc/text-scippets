import React from 'react';

// Styles import
import 'styles/pages/dashboard.scss';

// Components import
import SideBar from 'components/sidebar/SideBar';
import Tooltip from 'components/tooltip/Tooltip';
import EditableContent from 'components/dashboard/EditableContent';
import SearchInTextSnippetModal from 'components/dashboard/SearchInTextSnippetModal';

type TextSnippet = {
    id: number;
    title: string;
    content: string;
}

const mockData: Array<TextSnippet> = [
    {
        id: 1,
        title: 'Getting Started',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    },
    {
        id: 2,
        title: 'An\'s Notes',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        title: 'Demo Notes',
        content: 'Helloooooooo'
    },
    {
        id: 4,
        title: 'CMCGlobal-DU11',
        content: 'Helloooooooo'
    },
    {
        id: 5,
        title: 'Another NOTESSSSSSSSSSSSSS',
        content: 'Helloooooooo'
    },
]

const Dashboard: React.FC = () => {

    // States
    const titleHeaderRef = React.useRef<HTMLDivElement>(null);
    const [isCloseSideBar, setIsCloseSideBar] = React.useState<boolean>(false);
    const [headerHeight, setHeaderHeight] = React.useState<number>(0);

    const [currentTextSnippet, setCurrentTextSnippet] = React.useState<TextSnippet>({
        id: 0,
        content: 'Loading...',
        title: 'Loading...',
    });
    const [mockDataState, setMockDataState] = React.useState<Array<TextSnippet>>(null);

    const [isOpenSearchModal, setIsOpenSearchModal] = React.useState<boolean>(false);
    const [isOpenAddNewModal, setIsOpenAddNewModal] = React.useState<boolean>(false);

    const [dragData, setDragData] = React.useState({clientX: 200, clientY: 200});
    // Effects set mock data
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setMockDataState(mockData);
        }, 1000);

        return () => {
            // Cleanup
            clearTimeout(timeout);
        }
    }, []);

    React.useEffect(() => {
        if (mockDataState) {
            setCurrentTextSnippet(mockDataState[0]);
        }

    }, [mockDataState]);

    // Effects get header height
    React.useLayoutEffect(() => {
        if (titleHeaderRef.current) {
            setHeaderHeight(titleHeaderRef.current.clientHeight);
        }
    }, [titleHeaderRef]);

    const handleCloseSideBar = () => {
        setIsCloseSideBar(true);
    }

    const handleOpenSideBar = () => {
        setIsCloseSideBar(false);
    }

    const handleSelectTextSnippet = (index: number) => {
        setCurrentTextSnippet(mockData[index]);
    }

    const getCurrentIndex = (current: TextSnippet) => {
        return mockData.findIndex(item => item.id === current.id);
    }

    const handleOpenSearchModal = () => {
        setIsOpenSearchModal(true);
    }

    const handleSearchInTextSnippet = (searchText: string) => {
        const newText = currentTextSnippet.content.replaceAll(searchText, `<mark>${searchText}</mark>`);
        setCurrentTextSnippet({
            ...currentTextSnippet,
            content: newText
        });
    }

    return (
        <div className='w-screen h-screen max-h-screen flex flex-row overflow-hidden relative'>
            <SideBar
                isCloseSideBar={isCloseSideBar}
                textSnippetsData={mockData}
                selectedTextSnippetIndex={getCurrentIndex(currentTextSnippet)}
                handleCloseSideBar={handleCloseSideBar}
                handleOpenSideBar={handleOpenSideBar}
                handleSelectTextSnippet={handleSelectTextSnippet}
                handleOpenSearchModal={handleOpenSearchModal}
            />

            {/* Main Section */}
            <div className={`h-screen w-full max-h-screen duration-500 ease-in-out ${!isCloseSideBar && 'ml-64'} relative`}>
                <div
                    ref={titleHeaderRef}
                    className={`mainsection-header w-full flex flex-row items-center pt-3 pb-3 pl-8 pr-4 bg-white absolute`}
                >
                    {
                        isCloseSideBar &&
                        <button onClick={handleOpenSideBar}
                            className='hover:bg-gray-300 p-1 rounded mr-4'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    }

                    <Tooltip content={currentTextSnippet.title} direction='bottom' >
                        <span className='w-96 text-ellipsis font-medium overflow-hidden whitespace-nowrap'>
                            {currentTextSnippet.title}
                        </span>
                    </Tooltip>
                </div>

                <div
                    style={{ maxHeight: `calc(100vh - ${headerHeight}px)`, marginTop: headerHeight }}
                    className={`mainsection-content pb-5 flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto dashboard-scrollbar`}
                >
                    <div className='w-1/2 h-auto'>
                        <div className='text-4xl font-bold pt-10 pb-5'>{currentTextSnippet.title}</div>
                        <div className='w-full'>
                            <EditableContent
                                content={currentTextSnippet.content}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}

            {
                isOpenSearchModal &&
                <SearchInTextSnippetModal 
                    selectedTextSnippet={currentTextSnippet}
                    onCloseModal={() => setIsOpenSearchModal(false)}
                    handleSearchInTextSnippet={handleSearchInTextSnippet}
                />
            }
        </div>
    )
}

export default Dashboard;

