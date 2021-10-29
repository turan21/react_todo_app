import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const {label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, count},
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        <div className="tab-title"><div className="tab-circle">{count}</div>{label}</div>
      </li>
    );
  }
}

export default Tab;