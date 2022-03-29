import { Toolbar } from '@mui/material';
import React from 'react';
import 'styles/components/tooltip/tooltip.scss';

type Props = {
    children?: React.ReactNode;
    content: string;
    direction: 'top' | 'bottom' | 'left' | 'right';
};

const Tooltip: React.FC<Props> = (props: Props) => {

    const convertDirectionToTailwindClass = (direction: 'top' | 'bottom' | 'left' | 'right') => {
        switch (direction) {
            case 'top':
                return '-bottom-10 -mt-7';
            case 'bottom':
                return 'top-0 mt-7 mr-4';
            case 'left':
                return 'right-full top-0 mr-3';
            case 'right':
                return 'left-full top-0 ml-3';
        }
    };
    return(
        <div className='tooltip-wrapper relative'>
            {props.children}
            <div className={`tooltip-container absolute hidden ${convertDirectionToTailwindClass(props.direction)}`}>
                <div className='tooltip-content bg-gray-900 text-white rounded-md pt-1 pb-1 pl-2 pr-2 text-xs'>
                    {props.content}
                </div>
            </div>
        </div>
    )
};

export default Tooltip;