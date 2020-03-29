import React, { useState } from 'react';
import {createStream} from '../../services/createStream';
import StreamForm from './StreamForm';


const StreamCreate = (props) => {
    const initialFormState = { title: '', description: '' }
    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const onFormSubmit = event => {
        event.preventDefault();
        if (!formData.title || !formData.description) return;

        createStream(formData);
        props.history.push('/');
        setFormData(initialFormState);
    };

    return (
        <div>
            Create a stream
            <StreamForm 
            actionType="Create new stream"
            formData={formData}
            onInputChange={handleInputChange}
            onFormSubmit={onFormSubmit}
            />
        </div>
    );
};

export default StreamCreate;