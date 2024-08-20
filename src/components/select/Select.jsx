import React from 'react';
import Select from 'react-select';
import './select.scss';

export const SelectComp = (props) => {
    // console.log(props)
    return (
        <Select
            classNamePrefix='style-select'
            options={props.option}
            placeholder={props.plasholderSelect}
        />
    );
};

