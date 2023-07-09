import './index.css'

// Write your code here
const MoneyDetails = props => {
  const {detail, amount, imgUrl, alternate, testId} = props
  return (
    <div className="money-detail-container">
      <img src={imgUrl} alt={alternate} className="money-detail-image" />
      <div>
        <p>{detail}</p>
        <p data-testid={testId}>Rs {amount}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
