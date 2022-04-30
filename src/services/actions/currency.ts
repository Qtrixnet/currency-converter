import api from "../../utils/Api";
import {
  getExchangeRates,
  getExchangeRatesFailed,
  getExchangeRatesSuccess,
  getCurrentCurrencyExchangeRates,
  getCurrentCurrencyExchangeRatesSuccess,
  getCurrentCurrencyExchangeRatesFailed
} from "../reducers/currency";
import {handleGetCurrentCurrencyExchangeRatesProps} from "../types/types";

// @ts-ignore
export const handleGetExchangeRates = () => (dispatch) => {
  dispatch(getExchangeRates());
  return api.getExchangeRates()
    .then(rates => {
      dispatch(getExchangeRatesSuccess(rates))
    })
    .catch(error => {
      console.log(error)
      dispatch(getExchangeRatesFailed())
    })
}

// @ts-ignore
export const handleGetCurrentCurrencyExchangeRates = (currency) => (dispatch) => {
  dispatch(getCurrentCurrencyExchangeRates());
  return api.getCurrentCurrencyExchangeRates(currency)
    .then(rates => {
      dispatch(getCurrentCurrencyExchangeRatesSuccess(rates))
    })
    .catch(error => {
      console.log(error)
      dispatch(getCurrentCurrencyExchangeRatesFailed())
    })
}
