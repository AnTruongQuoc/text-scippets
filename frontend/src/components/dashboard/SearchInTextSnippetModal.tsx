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

    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        //console.log(e);
    }
    return (
        <div className='absolute top-0 right-4 flex flex-row items-center justify-center'>
            <div className='h-64 w-1/2 min-w-[500px] bg-white opacity-100 z-50 relative'>
                <button
                    onClick={onCloseModal}
                    className='absolute top-0 right-0 hover:bg-gray-100 hover:rounded cursor-pointer p-1 m-2'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#d1d5db" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className='mt-14'>
                    <div className='flex flex-row items-center justify-center'>
                        <h1 className='text-2xl font-bold text-gray-900 mr-2'>Find in </h1>
                        <h5 className='bg-green-400 rounded-full pl-3 pr-3 pt-1 pb-1 font-medium text-gray-900 text-md'>{selectedTextSnippet.title}</h5>
                    </div>

                    <form className='mt-6 w-64 mx-auto flex flex-col' onSubmit={handleSubmitSearchKey}>
                        <div className='flex flex-row items-center justify-center shadow-sm rounded-xl p-3 bg-slate-100 w-fit'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type='text' className='flex grow shrink p-2 bg-transparent outline-none  text-gray-900' placeholder='Search in text snippet' 
                                onChange={onChangeSearchText}
                            />
                        </div>

                        <button type='submit' className='mx-auto bg-blue-600 rounded pt-1 pb-1 pl-3 pr-3 text-white mt-4'>Find</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default SearchInTextSnippetModal;