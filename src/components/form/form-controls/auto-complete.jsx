import React from 'react'
import FormControl from '../form-controls/form-control'
import { AutoComplete } from 'antd';


function Complete(props) {
  return (
      <FormControl>
          <AutoComplete
                name={props.name}
                //value={props.value}
                onSearch={props.onInputSearch}
                onSelect={props.onSelectChange}
                required={props.isRequired ? props.isRequired : false}
                size='large'
                readOnly={props.isReadonly ? props.isReadonly : false}
                dataSource={props.dataSource}
                placeholder={props.placeholder}
                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
            />
      </FormControl>
    
  );
}

export default Complete