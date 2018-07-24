import * as React from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

interface IProps {
  label: string;
  value: string;
  onChange: (e: React.FormEvent<FormControl>) => void;
}
export const TitleInput = ({label, value, onChange}: IProps) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl type="text" value={value} onChange={onChange} />
    <FormControl.Feedback />
  </FormGroup>
);
