import React from 'react';


const StreamForm = () => {
    return (
        <form>
            <label>Title</label>
            <input type="text" name="title" value="" />
            <label>Description</label>
            <input type="text" name="description" value="" />
            <button>Add new user</button>
        </form>
    );
};

export default StreamForm;
