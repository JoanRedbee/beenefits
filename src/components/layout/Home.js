import React, { Component } from 'react'
import QCard from './QCard';
import QBudget from '../qs/QBudget';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="container home">
        <div className="row">
          <div className="col s12 m4">
            <QBudget />          
          </div>
        
          <div className="col s12 m4">
            <QCard title="Q1 Forecast">
              <Link to="/forecast">
                <span className="red-text big-text">- $30.000</span>
              </Link>
              <p>Listado de Beneficios Recurrentes</p>
            </QCard>
          </div>

          <div className="col s12 m4">
            <QCard title="Q1 Available">
              <Link to="/expenses">
                <span className="green-text big-text">$150.000</span>
              </Link>
              <p>Listado de Gastos reportados</p>
            </QCard>
          </div>
        </div>
      </div>
    )
  }
}
