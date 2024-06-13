import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';

function Header() {
    return (
        <header>
            <h1 className='space'>
                <AssignmentIcon /> To-Do List
            </h1>
        </header>
    );
}

export default Header;