import React, { useState } from 'react';

export function PasswordInput(props) {

    const [value, minLength] = useState('');

    return (
        <div>
            <input
                type="password"
                value={value}
                onChange={e => minLength(e.target.value)}
                className={
                    value.length >= 8 ? "input input-match" : "input"
                }
            />
        </div>
    );
}