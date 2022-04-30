import {ThunkAction} from "redux-thunk";
import {Action, ActionCreator} from "redux";
import store from "../store";
import {
  getExchangeRates,
  getExchangeRatesSuccess,
  getExchangeRatesFailed,
  getCurrentCurrencyExchangeRates,
  getCurrentCurrencyExchangeRatesSuccess,
  getCurrentCurrencyExchangeRatesFailed
} from '../reducers/currency';

export interface ICurrencyState {
  exchangeRates: [] | null,
  exchangeRatesRequest: boolean,
  exchangeRatesFailed: boolean,
  currentCurrency: string | null,
  amount: number,
}

export interface IGetCurrentCurrencyExchangeRatesProps {
  currency: string
}

export interface handleGetCurrentCurrencyExchangeRatesProps {
  currency: string
}

export type TApplicationActions =
  | typeof getExchangeRates
  | typeof getExchangeRatesSuccess
  | typeof getExchangeRatesFailed
  | typeof getCurrentCurrencyExchangeRates
  | typeof getCurrentCurrencyExchangeRatesSuccess
  | typeof getCurrentCurrencyExchangeRatesFailed

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;
