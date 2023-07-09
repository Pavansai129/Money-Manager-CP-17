import './index.css'

// Write your code here
const MoneyDetails = props => {
  const {detail, amount, imgUrl, alternate} = props
  return (
    <div className="money-detail-container">
      <img src={imgUrl} alt={alternate} className="money-detail-image" />
      <div>
        <p>{detail}</p>
        <p>{amount}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
