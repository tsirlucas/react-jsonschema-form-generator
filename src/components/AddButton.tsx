import * as React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import {ANY_FIELD} from 'src/components/FormBuilder/Fields';

interface IProps {
  onSelect: (option: string) => () => void;
}

const options = Object.keys(ANY_FIELD);

export const AddButton = (props: IProps) => (
  <DropdownButton bsStyle="info" title="Add" id="add-button">
    {options.map((option, index) => (
      <MenuItem key={index} eventKey={index} onClick={props.onSelect(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </MenuItem>
    ))}
  </DropdownButton>
);
