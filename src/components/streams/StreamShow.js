import React, { useState, useEffect } from 'react';
import { fetchStream } from '../../services/fetchStream';


const StreamShow = (props) => {
    const initialFormState = { title: '', description: '' }
    const currentStreamId = props.match.params.id;
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        (async (id) => {
            const response = await fetchStream(id);
            setFormData(response.data);
        })(currentStreamId);
    }, [currentStreamId]);


    return (
        <div className="ui container">
            <div>
                {formData.title}
            </div>
            <div>
                {formData.description}
            </div>
        </div>
    );
};

export default StreamShow;