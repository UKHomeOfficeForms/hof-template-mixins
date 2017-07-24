'use strict';

const React = require('react');
const FormGroup = require('../form-group');

module.exports = class Select extends React.Component {

  render() {
    const key = this.props.argument;
    const field = this.props.fields.find(f => f.key === key);
    const label = this.props.translate(`fields.${key}.label`);

    return <FormGroup
      name={key}
      label={label}
      error={false}
      className={field.className}
    >
      <select
        name={key}
        id={key}
      >
        {field.options.map((opt, i) => {
          return <option key={i} value={opt.value}>{opt.value}</option>;
        })}
      </select>
    </FormGroup>
  }

};
