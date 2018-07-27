import * as React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

export interface IProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}
export const NumberInput = ({label, value, onChange}: IProps) => {
  const changeCB = (e: React.FormEvent<FormControl>) => {
    const cbValue = (e.target as HTMLTextAreaElement).value;
    onChange(parseInt(cbValue, 10));
  };

  return (
    <FormGroup>
      <ControlLabel>{label}</ControlLabel>
      <FormControl type="number" step={1} min={0} value={value} onChange={changeCB} />
      <FormControl.Feedback />
    </FormGroup>
  );
};
