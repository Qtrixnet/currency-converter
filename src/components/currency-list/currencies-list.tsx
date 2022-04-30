import './currencies-list.scss';
import {FC} from 'react';
import {useSelector} from "../../services/hooks/hooks";

const CurrenciesList: FC = () => {
  const rates = useSelector(state => state.currency.exchangeRates);
  return (
    <ul className="currencies-list">
      {
        rates && Object.keys(rates).map((currency, idx) => {
          return (
            <li key={idx} className="currencies-list__item">
              <span>{currency}</span>
              <span>{
                // @ts-ignore
                rates[currency]
              }</span>
            </li>
          )
        })
      }
    </ul>
  );
};

export default CurrenciesList;
