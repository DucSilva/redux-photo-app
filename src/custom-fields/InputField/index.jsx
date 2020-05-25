import Proptypes from 'prop-types';
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap'

InputField.propTypes = {
    field: Proptypes.object.isRequired,
    form: Proptypes.object.isRequired,

    type: Proptypes.string,
    label: Proptypes.string,
    placeholder: Proptypes.string,
    disabled: Proptypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props){
    const { field, form, type, label, placeholder, disabled } = props;
    const { name } = field;
    return(
        <FormGroup>
           {label &&  <Label for={name}>{label}</Label> }
            <Input
                id={name}
                {...field}
                placeholder={placeholder}
                type={type}
                disabled={disabled}
            />
        </FormGroup>
    )
}

export default InputField;