import './selects.scss';
import {FC, useState, useRef} from 'react';
import {useDispatch, useSelector} from "../../services/hooks/hooks";
import TextLoader from "../text-loader/text-loader";
import {handleGetCurrentCurrencyExchangeRates} from "../../services/actions/currency";

const Select: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef<HTMLUListElement>(null);
  const currentCurrency = useSelector(state => state.currency.currentCurrency);
  const amount = useSelector(state => state.currency.amount);
  const rates = useSelector(state => state.currency.exchangeRates);

  const handleOpenSelect = () => {
    setIsOpen(!isOpen)
    if (ref.current) {
      const elementHeight = parseInt(window.getComputedStyle(ref.current, null).getPropertyValue('height'), 10)
      ref.current.style.maxHeight = elementHeight ? '0px' : '50vh';
    }
  }

  // @ts-ignore
  const handleRateClick = (evt) => {
    dispatch(handleGetCurrentCurrencyExchangeRates(evt.target.textContent))
  }

  return (
    <div className="select">
      <span className="select__value">{amount ? amount : <TextLoader/>}</span>
      <div className="select__container" onClick={handleOpenSelect}>
        <div className="select__list">
          <span className="select__list-value">{currentCurrency ? currentCurrency : <TextLoader/>}</span>
          <button className={`select__list-button ${isOpen ? 'select__list-button--opened' : ''}`}/>
        </div>
        <ul ref={ref} className={`select__currency-list`}>
          {rates && Object.keys(rates).map((rate, idx) => (
            <li key={idx} onClick={handleRateClick} className="select__currency-list-item">{rate}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
