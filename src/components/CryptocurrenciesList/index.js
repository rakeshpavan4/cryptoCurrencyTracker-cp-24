// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.getcryptoList()
  }

  getcryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyLogo: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      euroValue: eachCurrency.euro_value,
      usdValue: eachCurrency.usd_value,
    }))
    this.setState({cryptoList: formattedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="list-container">
              <li className="list-header">
                <h1 className="money">Coin Type</h1>
                <div className="money-heading">
                  <h1 className="money">USD</h1>
                  <h1 className="money">EURO</h1>
                </div>
              </li>
              {cryptoList.map(each => (
                <CryptocurrencyItem details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
