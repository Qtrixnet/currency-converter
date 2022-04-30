import './rate.scss';
import Select from "../select/select";
import CurrenciesList from "../currency-list/currencies-list";

const Rate = () => {
  return (
    <div className="rate">
      <h1 className="rate__title">Текущий курс валют</h1>
      <div className="rate__container">
        <Select/>
        <div  className="rate__equally"/>
        <CurrenciesList/>
      </div>
    </div>
  );
};

export default Rate;
