import React, { useState } from 'react';

export function CheckBoxComp(props) {

    const [name] = useState('boxName');
    const [initialValue] = useState(false);

    return (
        <div>
            <input type="checkbox"
                name={name}
                value={initialValue}
                onChange={initialValue === !initialValue ? initialValue.target.checked : ''}

            />
            <label>Check me!</label>
        </div>
    )
}