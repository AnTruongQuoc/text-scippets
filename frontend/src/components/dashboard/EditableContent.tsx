import React from 'react';

type Props = {
    children?: React.ReactNode;
    content: string;
}

const EditableContent: React.FC<Props> = (props: Props) => {

    const [editedBlock, setEditedBlock] = React.useState<string>(props.content);

    React.useEffect(() => {
        setEditedBlock(props.content);
    }, [props.content]);

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    //     e.preventDefault();
    //     console.log(e)


    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         console.log(index) 
    //     }
    // }

    // const handleContentBlockChange = (e: React.FormEvent<HTMLDivElement>, index: number) => {
    //     e.preventDefault();
    //     console.log(e.nativeEvent?.inputType, index)
    // }

    return (
        <div className='w-full h-auto'>
            <div suppressContentEditableWarning={true} contentEditable={true} className='text-sm p-1 outline-none hover:bg-gray-100'
                //onInput={(e) => handleContentBlockChange(e, index)}
                //onBlur={(e) => handleContentBlockChange(e, index)}
                onKeyUp={() => { }}
                dangerouslySetInnerHTML={{ __html: editedBlock }}
            >
                {/* {editedBlock} */}
            </div>
        </div>
    );
};

export default EditableContent;
