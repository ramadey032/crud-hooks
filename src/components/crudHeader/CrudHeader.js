import React from 'react';
import { Link } from 'react-router-dom';
import './CrudHeader.css'


const CrudHeader = () => {
    return (
        <div className="ui center aligned header todo-header">
            <div className="logo-box logo-animated">
                <Link to="/">
                    <img src="/todo-logo.png" alt="logo" className="todo-logo" />
                </Link>
            </div>
            <h2 >
            <i className="circular users icon"></i>
                CRUD USING HOOKS
            </h2>
        </div>
    );
};

export default CrudHeader;