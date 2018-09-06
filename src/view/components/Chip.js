import React, { Fragment } from 'react';
import './_components.css';

const Chip = ({ className = '', value, count = 0, isSelected, onToggle = () => {}}) =>  {
  const toggle = () => onToggle(!isSelected);

  return (
    <div
      className={'chip ' + (isSelected ? 'chip--selected ' : '') + className}
      children={value + ' \u00A0 \u00A0 ' + count}
      onClick={toggle}
    />
  );
}

export default Chip;
