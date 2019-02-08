/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import { Input } from 'antd';
import FormControl from '../form-controls/form-control'

const { TextArea } = Input;

const inputTextArea = (props) => {
    return(
        <FormControl>
            <label htmlFor={props.name}>
                {props.labelName}
                {props.isRequired ? <span className="star">*</span> : null}
            </label>
            <TextArea 
                placeholder={props.placeholder}
                className={props.classValue}
                name={props.name}
                value={props.value}
                onChange={props.onInputChange}
                size='large'
                autosize={{minRows:props.minRows ? props.minRows : 6}}
            />
        </FormControl>
    )
}

export default inputTextArea