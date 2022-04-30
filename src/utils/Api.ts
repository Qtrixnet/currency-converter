import {BASE_URL} from './constants';
import {IGetCurrentCurrencyExchangeRatesProps} from "../services/types/types";

//* Класс для взаимодействия с api
class Api {
  private _baseUrl: string;

  constructor(url: string) {
    this._baseUrl = url;
  }

  //* Проверка статуса запроса
  _requestResult(res: Response) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res)
    }
  }

  //* Запрос курса валют
  getExchangeRates() {
    return fetch(this._baseUrl).then((res) => this._requestResult(res));
  }

  //* Запрос курса определенной валюты
  getCurrentCurrencyExchangeRates(currency: IGetCurrentCurrencyExchangeRatesProps) {
    return fetch(`${this._baseUrl}?from=${currency}`).then((res) => this._requestResult(res));
  }
}

const api = new Api(BASE_URL);

export default api;
