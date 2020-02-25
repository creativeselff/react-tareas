import React, { useState } from 'react';

export function MatchNombre(props) {

    const [value, setValue] = useState('');
    const nameUser = props.name;

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                className={value === nameUser ? "input-match" : "input"}
            />
        </div>
    );
}