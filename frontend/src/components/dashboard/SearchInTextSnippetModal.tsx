import React from 'react';

type TextSnippet = {
    id: number;
    title: string;
    content: string;
}

type Props = {
    selectedTextSnippet: TextSnippet;
    onCloseModal: () => void;
    handleSearchInTextSnippet: (searchKey: string) => void;
}

const SearchInTextSnippetModal: React.FC<Props> = (props: Props) => {
    const { onCloseModal, selectedTextSnippet, handleSearchInTextSnippet} = props;

    // States
    const [searchText, setSearchText] = React.useState<string>('');

    const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmitSearchKey = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSearchInTextSnippet(searchText);
    }

    return (
        <div className='absolute top-0 right-6 flex flex-row items-center justify-center shadow-sm shadow-gray-600 rounded' style={{zIndex: 999}}>
            <div className='h-fit w-fit bg-white opacity-100 z-50 flex flex-row-reverse items-center justify-center m-2'>
                <button
                    onClick={onCloseModal}
                    className='hover:bg-gray-100 hover:rounded cursor-pointer p-1 m-2 h-8 w-8 flex flex-row items-center justify-center'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#d1d5db" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div>
                    <form className='w-fit mx-auto flex flex-col' onSubmit={handleSubmitSearchKey}>
                        <div className='flex flex-row items-center justify-center shadow-sm rounded-xl p-1 bg-slate-100 w-fit'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <h5 className='bg-green-400 w-32 text-ellipsis overflow-hidden whitespace-nowrap rounded-full ml-2 pl-3 pr-3 pt-1 pb-1 font-medium text-gray-900 text-xs'>{selectedTextSnippet.title}</h5>
                            <input type='text' className='flex grow shrink p-2 bg-transparent outline-none  text-gray-900' placeholder='Search in text snippet' 
                                onChange={onChangeSearchText}
                                autoFocus={true}
                            />
                        </div>

                        {/* <button type='submit' className='mx-auto bg-blue-600 rounded pt-1 pb-1 pl-3 pr-3 text-white mt-4'>Find</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SearchInTextSnippetModal;