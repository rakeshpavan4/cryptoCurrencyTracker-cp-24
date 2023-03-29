// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = details

  return (
    <li className="list-headers">
      <div className="logo-details">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="currencyname">{currencyName}</p>
      </div>
      <div className="euro-usd-details">
        <p className="usd-details">{usdValue}</p>
        <p className="euro-details">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
