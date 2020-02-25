import React, { useState } from 'react';

export function PasswordInput(props) {

    const [validation, setValidation] = useState('');
    const isPassword = props.password;

    return (
        <div>
            <input
                type="password"
                value={validation}
                onChange={e => setValidation(e.target.validation)}
                className={
                    (validation) => isPassword.length >= 8 ? "input-match" : "input"
                }
            />
        </div>
    );
}