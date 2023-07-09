import './index.css'

// Write your code here
const TransactionItem = props => {
  const {eachTransaction, deleteTransaction} = props
  const {
    transactionId,
    title,
    amount,
    type,
    isClicked,
    deleteImg,
  } = eachTransaction
  const onDeleteTransaction = () => {
    deleteTransaction(transactionId)
  }
  return (
    <li className="transaction-item">
      <p className="each-transaction-item">{title}</p>
      <p className="each-transaction-item">{amount}</p>
      <p className="each-transaction-item">{type}</p>
      <button type="button" onClick={onDeleteTransaction}>
        <img src={deleteImg} alt="delete" className="delete-image" />
      </button>
    </li>
  )
}

export default TransactionItem
