import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  getTransactionType = () =>
    transactionTypeOptions.map(eachType => (
      <option id={eachType.optionId}>{eachType.displayText}</option>
    ))

  render() {
    return (
      <div className="money-manager-app-bg-container">
        <div className="app-container">
          <div className="welcome-card">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              detail="Balance"
              amount="0"
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alternate="balance"
            />
            <MoneyDetails
              detail="Income"
              amount="0"
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alternate="income"
            />
            <MoneyDetails
              detail="Expenses"
              amount="0"
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alternate="expenses"
            />
          </div>
          <div className="form-and-table-container">
            <div>
              <h1>Add Transactions</h1>
              <form className="input-form">
                <label htmlFor="title">TITLE</label>
                <input type="text" id="title" />
                <label htmlFor="amount">AMOUNT</label>
                <input type="number" id="amount" />
                <label htmlFor="type">TYPE</label>
                <select id="type">{this.getTransactionType()}</select>
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
