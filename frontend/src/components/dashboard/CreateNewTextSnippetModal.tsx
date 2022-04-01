import React from 'react'

type Props = {
    handleCloseModal: () => void;
    // handleSave: () => void;
    handleCreateNewTextSnippet: (title: string, content: string) => void;
}
const CreateNewTextSnippetModal: React.FC<Props> = (props: Props) => {
    const { handleCloseModal, handleCreateNewTextSnippet } = props;

    // Refs
    const modalRef = React.useRef<HTMLDivElement>(null);

    // useEffect
    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as HTMLElement)) {
                handleCloseModal();
            }
        };

        // Bind the mouseup event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the mouseup event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        }
    },[]);

    // Functions

    const onSubmitCreateNew = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Create new text snippet')
        
        const target = e.target as typeof e.target & {
            title: { value: string };
            content: { value: string };
        }

        if (target.title.value && target.content.value) {
            handleCreateNewTextSnippet(target.title.value, target.content.value);
        }
    }

    return(
        <div className='absolute w-screen h-screen top-0 left-0 flex flex-row items-center justify-center z-50'>
            <div className='h-fit w-96 bg-white z-50 opacity-100 rounded p-4' ref={modalRef}>
                <form onSubmit={onSubmitCreateNew}>
                    <input type='text'name='title' className='w-full p-2 bg-transparent outline-none text-gray-700 text-4xl font-bold' placeholder='Untitled' />
                    <textarea name='content' className='w-full p-2 bg-transparent outline-none text-gray-900' placeholder='Your content goes here...' />

                    <div className='flex flex-row justify-end'>
                        <button className='bg-blue-600 rounded pt-1 pb-1 pl-3 pr-3 text-white mt-4'>Create</button>
                    </div>
                </form>
            </div>
            <div className='absolute w-screen h-screen bg-black opacity-60 '>
            </div>
        </div>
    )
}

export default CreateNewTextSnippetModal;