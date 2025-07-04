import React from 'react';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}> <DeleteSweepIcon /> </button>
        </div>
    );
}

export default Note;