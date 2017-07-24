'use strict';

const React = require('react');

module.exports = class InputSubmit extends React.Component {

  render() {
    const value = this.props.argument.split('|')[0];
    const id = this.props.argument.split('|')[1];
    const label = this.props.translate(`buttons.${value}`) + ' is React';

    return <input
      type="submit"
      value={label}
      id={id}
      className="button"
    />
  }

};
