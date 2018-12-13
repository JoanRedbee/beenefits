import React, { Component } from 'react'
import QCard from './QCard';
import QBudget from '../qs/QBudget';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBudget } from '../../store/actions/budgetActions';

function budgetPerMonth(month) {
  return month.bees * month.$_per_bee
}

class Home extends Component {

  componentWillMount() {
    const year = new Date().getFullYear()
    this.props.getBudget(year)
  }

  render() {
    console.log(this.props)
    const { budget } = this.props
    const year = new Date().getFullYear()
    const months = budget[year] || []
    const qbudget = months.map(budgetPerMonth).reduce((prev, actual) => prev + actual, 0);

    return (
      <div className="container home">
        <div className="row">
          <div className="col s12 m4">
            <QBudget 
              budget={qbudget}
            />          
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

const mapStateToProps = (state) => {
  return {
    budget: state.budget
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBudget: (year) => dispatch(getBudget(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)