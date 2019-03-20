import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * formato stateless, component de função, não contém estado
 */

const Button = props => (
  <button onClick={props.onClick} style={{ background: "#F00" }}>
    {props.children}
  </button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;
