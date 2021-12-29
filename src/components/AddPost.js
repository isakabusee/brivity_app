import react, { useState } from "react";
import { FormInput, TextArea, Button } from './Styles';

const AddPost = () => {
    const [userPost, setUserPost] = useState("");
    
    const handleChange  = (e) => {
        setUserPost(e.target.value)
    }
    return(
       

         <div>
            <h1>New post</h1>
            <FormInput name="title"/><br/>
            <TextArea name="content" /><br/>
            <Button onClick={handleChange}>Submit</Button>
        </div>

    )
}

export default AddPost;
