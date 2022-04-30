import {createSlice} from "@reduxjs/toolkit";
import {ICurrencyState} from "../types/types";

const initialState: ICurrencyState = {
  exchangeRates: null,
  exchangeRatesRequest: false,
  exchangeRatesFailed: false,
  currentCurrency: null,
  amount: 0,
}

export const currencyStateSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    getExchangeRates: (state) => {
      state.exchangeRatesRequest = true;
    },
    getExchangeRatesSuccess: (state, action) => {
      state.exchangeRatesRequest =  false;
      state.exchangeRates = action.payload.rates;
      state.currentCurrency = action.payload.base;
      state.amount = action.payload.amount;
    },
    getExchangeRatesFailed: (state) => {
      state.exchangeRatesRequest = false;
      state.exchangeRatesFailed = true;
    },
    getCurrentCurrencyExchangeRates: (state) => {
      state.exchangeRatesRequest = true;
    },
    getCurrentCurrencyExchangeRatesSuccess: (state, action) => {
      state.exchangeRatesRequest =  false;
      state.exchangeRates = action.payload.rates;
      state.currentCurrency = action.payload.base;
      state.amount = action.payload.amount;
    },
    getCurrentCurrencyExchangeRatesFailed: (state) => {
      state.exchangeRatesRequest = false;
      state.exchangeRatesFailed = true;
    }
  }
})

const {actions, reducer} = currencyStateSlice;

export const {
  getExchangeRates,
  getExchangeRatesSuccess,
  getExchangeRatesFailed,
  getCurrentCurrencyExchangeRates,
  getCurrentCurrencyExchangeRatesSuccess,
  getCurrentCurrencyExchangeRatesFailed
} = actions;

export default reducer
