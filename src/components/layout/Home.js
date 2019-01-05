import React, { Component } from 'react'
import QCard from './QCard';
import QBudget from '../qs/QBudget';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBudget } from '../../store/actions/budgetActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function budgetPerMonth(month) {
  return month.bees * month.$_per_bee
}

class Home extends Component {

  /*
  componentWillMount() {
    const year = new Date().getFullYear()
    this.props.getBudget(year)
  }
  */

  render() {
    console.log(this.props)
    const { budget } = this.props
    //const months = budget.months || []
    //const qbudget = months.map(budgetPerMonth).reduce((prev, actual) => prev + actual, 0);

    return (
      <div className="container home">
        <div className="row">
          <div className="col s12 m4">
            <QBudget 
              months={budget.months}
            />          
          </div>
        
          <div className="col s12 m4">
            <QCard title="Q1 Recurring benefits">
              <Link to="/recurring">
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
  console.log(state);
  return {
    budget: state.budget
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    getBudget: (year) => dispatch(getBudget(year))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
*/
var year = '2018';
export default compose(
  //connect(mapStateToProps)
  connect(mapStateToProps),
  firestoreConnect(['recurring_benefits', `budget/${year}/months`, 'semi_recurrent'])
)(Home)


//export default connect(mapStateToProps)(Home)