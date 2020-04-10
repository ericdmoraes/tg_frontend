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
            <h1>clcique aqui para sair (just an exit test)</h1>
        </div>
    );
}
