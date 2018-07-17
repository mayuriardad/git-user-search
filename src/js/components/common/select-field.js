import constants from '../../constants/app-constants';
import React from 'react';
import PropTypes from 'prop-types'
export default class SelectField extends React.Component {
  render() {
    let options = [
      {
        key: constants.SORT_NAME_AZ,
        value: 'Sort By Name(A-Z)'
      },
      {
        key: constants.SORT_NAME_ZA,
        value: 'Sort By Name(Z-A)'
      }
    ]
    let optionItems = options.map(
      optionValue => {
        return <option key={optionValue.key} value={optionValue.key}>{optionValue.value}</option>
      });
    return (
      <div>
        <select  className="form-control" id="sel1" onChange={this.props.handleSelect} value={this.props.sort}>
          {optionItems}
        </select>
      </div>
    )
  }
}
SelectField.propTypes = {
  handleSelect: PropTypes.func,
  sort: PropTypes.string
};
