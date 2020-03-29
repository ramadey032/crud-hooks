import React from 'react';

const StreamForm = (props) => {
    return (
        <form onSubmit={props.onFormSubmit} className="ui form">
            <label>Title</label>
            <input type="text" name="title" value={props.formData.title} onChange={props.onInputChange} />
            <label>Description</label>
            <input type="text" name="description" value={props.formData.description} onChange={props.onInputChange} />
            <button className="ui button primary">{props.actionType}</button>
        </form>
    );
};

export default StreamForm;
