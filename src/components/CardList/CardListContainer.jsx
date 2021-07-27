import { useState, useEffect } from "react";

import API from "../../util/API.js";
import CardListPresenter from './CardListPresenter.jsx';

const CardListContainer = () => {
  const [cardListInfo, setCardListInfo] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (cardListInfo.length) return;

    const fetchAPIData = async () => {
      const data = await API.get.comments(page);
      setCardListInfo(data);
      setPage(page + 1);
    }

    fetchAPIData();
  })

  return (
    !cardListInfo.length
    ? <></>
    : <CardListPresenter cardListInfo={cardListInfo}/>
  )
}



export default CardListContainer;
