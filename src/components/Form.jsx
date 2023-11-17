import { useState } from "react"

function Form(){
    const [name, setName] = useState ('')
    const [url, setURL] = useState ('')

    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            
        }}>
            <label htmlFor="linkName">Name:</label>
            <br />
            <input type="text" id="linkName" name="linkName" value={name} onChange={(event) =>{
                setName(event.target.value)
            }} />
            <br />
            <br />
            <label htmlFor="URL">URL:</label>
            <br />
            <input type="text" id="linkURL" name="linkURL" value={url} onChange={(event) =>{
                setURL(event.target.value)
            }} />
            <br/>
            <br />
            <input id="submit-button" type="submit" value="Submit"></input>
        </form>
    )
}

export default Form

