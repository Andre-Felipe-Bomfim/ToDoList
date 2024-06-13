import React, { useState } from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {

        const {name, value} = event.target

        setNote( (prevNote) => {
            return {
               ...prevNote,
                [name]: value
            }
        } )
    }

    function submitNote(event) {
        props.onAdd(note)

        setNote({
            title: '',
            content: ''
        })

        event.preventDefault()
    }

    function expnad() {
        setExpanded(true)
    }

    return (
        <div>
            <form className="create-note">
                {
                    isExpanded ? <input 
                        name='title' 
                        value={note.title} 
                        placeholder="Título" 
                        onChange={handleChange}
                    /> : null
                }
                <textarea 
                    name="content" 
                    onClick={expnad}
                    value={note.content} 
                    placeholder="descrição" 
                    rows={isExpanded ? 3 : 1} 
                    onChange={handleChange}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}> 
                        <AddCircleOutlineIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;