/*
 * __author__ = 'Anand Singh <sanand926@gmail.com>'
 * __copyright__ = 'Copyright (C) 2019 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import React from 'react'
import FormControl from '../form-controls/form-control'
import { Checkbox } from 'antd';


function CheckBox(props) {
  return (
      <FormControl>
          <Checkbox onChange={props.onCheck}>
            {props.children}
          </Checkbox>
      </FormControl>
    
  );
}

export default CheckBox