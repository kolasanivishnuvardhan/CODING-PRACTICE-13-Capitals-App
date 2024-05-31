import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}
  onChangeInputValue = event => {
    const countryId = event.target.value
    const getCountryDetails = countryAndCapitalsList.filter((eachCountry)=>eachCountry.id===countryId)
    const country = getCountryDetails[0].country
    this.setState({country: country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <label value="countryAndCaptials" className="label">
              is capital of which country?
            </label>
            <select
              id="countryAndCaptials"
              className="dropdown-list"
              onChange={this.onChangeInputValue}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  value={eachCountry.id}
                  key={eachCountry.id}
                  className="countryName"
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
          </div>
          <h1 className="country-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
