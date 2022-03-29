import React from 'react';

type Block = {
    id: number;
    content: string;
}
type Props = {
    children?: React.ReactNode;
    blocks: Array<Block>;
}

const ContentBlock: React.FC<Props> = (props: Props) => {
    
    const [editedBlock, setEditedBlock] = React.useState<Block[]>(props.blocks);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
        e.preventDefault();
        console.log(e)


        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(index)
            const newBlock = {
                id: editedBlock[index].id + 1,
                content: '',
            }
            const newBlocks = [...editedBlock, newBlock];
            setEditedBlock(newBlocks);
        }
    }

    // const handleContentBlockChange = (e: React.FormEvent<HTMLDivElement>, index: number) => {
    //     e.preventDefault();
    //     console.log(e.nativeEvent?.inputType, index)
    // }

    return(
        <div>
            {
                editedBlock.map((block: Block, index) => {
                    return(
                        <div key={block.id} suppressContentEditableWarning={false} contentEditable={true} className='text-sm p-1 outline-none hover:bg-gray-100'
                           //onInput={(e) => handleContentBlockChange(e, index)}
                           //onBlur={(e) => handleContentBlockChange(e, index)}
                           onKeyUp={(e) => handleKeyDown(e, index)}
                        >
                            {block.content}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ContentBlock;
