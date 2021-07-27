import { useState, useEffect } from "react";

// import API from "../util/API.js";
import mock from '../util/mock.json';
import CardListPresenter from './CardListPresenter.jsx';

const CardListContainer = () => {
  const [cardListInfo, setCardListInfo] = useState([]);
  
  useEffect(() => {
    if (cardListInfo.length) return;

    setCardListInfo(mock);
    console.log(mock);
    // const fetchAPIData = async () => {
    //   const data = await API.get.comments
    // }
    // setCardListInfo()
  })

  return (
    !cardListInfo.length
    ? <></>
    : <CardListPresenter cardListInfo={cardListInfo}/>
  )
}

export default CardListContainer;
