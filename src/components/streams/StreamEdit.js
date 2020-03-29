import React, { useState, useEffect } from 'react';
import StreamForm from './StreamForm';
import { editStream } from '../../services/editStream';
import { fetchStream } from '../../services/fetchStream';


const StreamEdit = (props) => {
    const initialFormState = { title: '', description: '' }
    const currentStreamId = props.match.params.id;
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        (async (id) => {
            const response = await fetchStream(id);
            setFormData(response.data);
        })(currentStreamId);
    }, [currentStreamId]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onFormSubmit = event => {
        event.preventDefault();
        if (!formData.title || !formData.description) return;

        editStream(currentStreamId, formData);
        props.history.push('/');
        setFormData(initialFormState);
    };

    return (
        <div>
           <h3>Edit the stream</h3>
            <StreamForm
                actionType="Edit Stream"
                formData={formData}
                onInputChange={handleInputChange}
                onFormSubmit={onFormSubmit}
            />
        </div>
    );
};

export default StreamEdit;