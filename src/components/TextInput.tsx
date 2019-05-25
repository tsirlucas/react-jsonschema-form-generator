import React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

interface IProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}
export const TextInput = ({label, value, onChange}: IProps) => {
  const changeCB = (e: React.FormEvent<FormControl>) => {
    const cbValue = (e.target as HTMLTextAreaElement).value;
    onChange(cbValue);
  };

  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type="text" value={value} onChange={changeCB} />
      <FormControl.Feedback />
    </FormGroup>
  );
};
