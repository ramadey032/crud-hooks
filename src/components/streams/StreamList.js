import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { deleteStream } from '../../services/deleteStream';
import { fetchStreams } from '../../services/fetchStream';


const StreamList = () => {
    const [streamList, setStreamList] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetchStreams();
            setStreamList(response.data);
        })();
    }, []);

    const deleteRow = async (id) => {
        await deleteStream(id);
        setStreamList(streamList.filter(stream => stream.id !== id)); //updating the state
    };


    const renderList = () => {
        return (<div>
            {streamList.map((record) => {
                return (
                    <div className="item" key={record.id} >
                        <i className="large middle aligned address book icon green"></i>
                        <div className="content">
                            <Link to={`/streams/show/${record.id}`} className="header" >{record.title}</Link>
                            <div className="description">{record.description}</div>
                        </div>
                        <div className="right floated content">
                            <Link to={`/streams/edit/${record.id}`} className="ui button primary">EDIT</Link>
                            <button onClick={() => deleteRow(record.id)} className="ui button negative">DELETE</button>
                        </div>
                    </div>
                );
            }
            )}
        </div>);
    }

    return (
        <div className="ui container">
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            <div style={{ textAlign: "right" }}>
                <Link to="/streams/new" className="ui button primary">
                    Create Stream
                </Link>
            </div>
        </div>
    );
};

export default StreamList;