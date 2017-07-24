'use strict';

const React = require('react');

module.exports = class InputSubmit extends React.Component {

  render() {
    return <div
      id={this.props.name + '-group'}
      className="form-group"
      className={this.props.className}
      className={this.props.error && "validation-error"}
    >
      <label for={this.props.name}>
        {this.props.label}
      </label>
      {this.props.children}
    </div>
  }

};
