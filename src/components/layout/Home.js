import React, { Component } from 'react'
import QCard from './QCard';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m4">
            <QCard />
          </div>
          <div className="col s12 m4">
            <QCard />
          </div>
          <div className="col s12 m4">
            <QCard />
          </div>
        </div>
      </div>
    )
  }
}
