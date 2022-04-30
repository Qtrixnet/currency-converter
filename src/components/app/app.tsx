import {FC, useEffect} from 'react';
import './app.scss';
import Header from '../header/header';
import {Routes, Route} from 'react-router-dom';
import Rate from "../rate/rate";
import {useDispatch} from "../../services/hooks/hooks";
import {handleGetExchangeRates} from "../../services/actions/currency";

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleGetExchangeRates())
  }, [])

  return (
    <div className="app">
      <div className="app__overlay">
        <div className="app__container">
          <Header/>
          <Routes>
            <Route path="/" element={<Rate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
