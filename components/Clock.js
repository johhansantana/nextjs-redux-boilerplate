import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Clock extends Component() {
  // static propTypes = {
  //   lastUpdate: PropTypes.number.isRequired,
  //   light: PropTypes.bool.isRequired
  // };

  render() {
    return (
      <div className={light ? 'light' : ''}>
        {format(new Date(lastUpdate))}
        <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82FA58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    lastUpdate: state.lastUpdate,
    light: state.light
  }
}

const format = t => `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => n < 10 ? `0${n}` : n

export default connect(mapStateToProps)(Clock);
