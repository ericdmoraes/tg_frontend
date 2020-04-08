import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import { signOut } from '../../store/modules/auth/actions';

export default function Main() {
    const dispatch = useDispatch();

    const handleClick = async () => {
        dispatch(signOut());
    };

    return (
        <div onClick={() => handleClick()}>
            <h1>Main</h1>
        </div>
    );
}
