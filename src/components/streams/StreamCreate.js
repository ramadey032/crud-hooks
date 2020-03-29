import React, { useState } from 'react';
// import StreamForm from './StreamForm';


const StreamCreate = () => {
    const initialFormState = { title: '', description: '' }
    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value });
    }


    return (
        <div>
            Create a stream
            <form>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
                <label>Description</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                <button>Create new stream</button>
            </form>
        </div>
    );
};

export default StreamCreate;