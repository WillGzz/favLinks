function Form(){
    return(
        <form>
            <label for="linkName">Name:</label>
            <br />
            <input type="text" id="linkName" name="linkName" value="" />
            <br />
            <br />
            <label for="URL">URL:</label>
            <br />
            <input type="text" id="linkURL" name="linkURL" value=""/>
            <br/>
            <br />
            <input id="submit-button" type="submit" value="Submit"></input>
        </form>
    )
}

export default Form
