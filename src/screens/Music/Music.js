import React from 'react';
import ManageMusic from '../../components/ManageMusic/ManageMusic';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

const Music = () => {
    useUnprotectPage()

    return (
        <div>
            <ManageMusic />
        </div>
    )
}

export default Music;