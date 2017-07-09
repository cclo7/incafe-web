import React from 'react'
import PropTypes from 'prop-types'

const navStyle = {
  height: '48px',
  background: '#FF9800',
  color: '#FFFFFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Nav = ({ title }) => (
  <div style={navStyle}>
    <span>{title}</span>
  </div>
)

Nav.propTypes = {
  title: PropTypes.string
}

export default Nav
