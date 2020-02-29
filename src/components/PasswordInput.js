import React, { useState } from 'react';

export function PasswordInput(props) {


    const [value, setValue] = useState('');

    return (
        <div>
            <input
                type="password"
                value={value}
                onChange={e => setValue(e.target.value)}
                className={
                    value.length >= props.minLength ? "input input-match" : "input"
                }
            />
        </div>
    );
}