import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

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
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    transactionHistoryList: [],
  }

  onTitleChange = event => this.setState({title: event.target.value})

  onAmountChange = event => this.setState({amount: event.target.value})

  onTypeChange = event => {
    console.log(event.target.value)
    this.setState({type: event.target.value})
  }

  getIncomeAmount = list => {
    let income = 0
    list.forEach(each => {
      if (each.type.toLowerCase() === 'income') {
        income += parseInt(each.amount)
      }
    })
    return income
  }

  getExpensesAmount = list => {
    let expenses = 0
    list.forEach(each => {
      if (each.type.toLowerCase() === 'expenses') {
        expenses += parseInt(each.amount)
      }
    })
    return expenses
  }

  deleteTransaction = uniqueId => {
    this.setState(prevState => ({
      transactionHistoryList: prevState.transactionHistoryList.map(each => {
        if (each.transactionId === uniqueId) {
          return {...each, isClicked: !each.isClicked}
        }
        return each
      }),
    }))
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type, transactionHistoryList} = this.state
    const transactionId = uuidv4()
    const isClicked = false
    const incomeAmount = 0
    const deleteImg =
      'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png'
    const transaction = {
      transactionId,
      title,
      amount,
      type,
      isClicked,
      deleteImg,
    }
    this.setState({
      transactionHistoryList: [...transactionHistoryList, transaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    })
  }

  getTransactionType = () =>
    transactionTypeOptions.map(eachType => (
      <option key={uuidv4()} id={eachType.optionId} value={eachType.optionId}>
        {eachType.displayText}
      </option>
    ))

  render() {
    const {title, amount, transactionHistoryList} = this.state

    const filteredTransactionsList = transactionHistoryList.filter(
      eachTransaction => eachTransaction.isClicked === false,
    )
    const incomeAmount = this.getIncomeAmount(filteredTransactionsList)
    const expensesAmount = this.getExpensesAmount(filteredTransactionsList)
    const balanceAmount =
      incomeAmount > expensesAmount
        ? incomeAmount - expensesAmount
        : -(expensesAmount - incomeAmount)
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
              detail="Your Balance"
              amount={balanceAmount}
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
              alternate="balance"
              testId="balanceAmount"
            />
            <MoneyDetails
              detail="Your Income"
              amount={incomeAmount}
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
              alternate="income"
              testId="incomeAmount"
            />
            <MoneyDetails
              detail="Your Expenses"
              amount={expensesAmount}
              imgUrl="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
              alternate="expenses"
              testId="expensesAmount"
            />
          </div>
          <div className="form-and-history-container">
            <div className="form-card">
              <h1>Add Transactions</h1>
              <form className="input-form" onSubmit={this.addTransaction}>
                <label htmlFor="title">TITLE</label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={this.onTitleChange}
                />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  type="text"
                  id="amount"
                  value={amount}
                  onChange={this.onAmountChange}
                />
                <label htmlFor="type">TYPE</label>
                <select id="type" onChange={this.onTypeChange}>
                  {this.getTransactionType()}
                </select>
                <button type="submit">Add</button>
              </form>
            </div>
            <div className="history-card">
              <div>
                <h1>History</h1>
                <div className="history-statement-first-row-container">
                  <p className="table-column">Title</p>
                  <p className="table-column">Amount</p>
                  <p className="table-column">Type</p>
                </div>
              </div>
              <ul className="transactions-history">
                {filteredTransactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.transactionId}
                    eachTransaction={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
