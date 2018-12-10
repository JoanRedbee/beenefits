import React, { Component } from 'react'
import QCard from './QCard';

export default class Home extends Component {
  render() {
    return (
      <div className="container home">
        <div className="row">
          <div className="col s12 m4">
            <QCard title="Budget">
              <span>$180.000</span>
              <p>120 bees X $500</p>
            </QCard>
          </div>
          <div className="col s12 m4">
            <QCard title="Forecast">
              <span>$30.000</span>
              <p>Listado de Beneficios Recurrentes</p>
            </QCard>
          </div>
          <div className="col s12 m4">
            <QCard title="Available">
              <span>$150.000</span>
              <p>Listado de Gastos reportados</p>
            </QCard>
          </div>
        </div>
      </div>
    )
  }
}
