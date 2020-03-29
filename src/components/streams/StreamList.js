import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import streams from '../../services/streams';



const StreamList = () => {
    const [streamList, setStreamList] = useState([]);

    const fetchStreams = async () => {
        const response = await streams.get('/streams');
        setStreamList(response.data);
    }

    useEffect(() => {
        fetchStreams();
    }, []);

    const renderList = () => {
        return (<ul>
            {streamList.map((record) => <li key={record.id}>{record.title}</li>)}
        </ul>);
    }

    return (
        <div>
            {renderList()}
            <div>
                <Link to="/streams/new">
                    Create Stream
                </Link>
            </div>
        </div>
    );
};

export default StreamList;