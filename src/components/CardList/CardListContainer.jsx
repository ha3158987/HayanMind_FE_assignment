import { useState, useEffect } from "react";

import API from "../../util/API.js";
import CardListPresenter from './CardListPresenter.jsx';

const CardListContainer = () => {
  const [cardListInfo, setCardListInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [io, setIo] = useState(null);

  const fetchAPIData = async () => {
    const data = await API.get.comments(page);
    setCardListInfo([...cardListInfo, ...data]);
  }

  const registerObservingEl = (el) => {
    io.observe(el);
  }

  useEffect(() => {
    const targetIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setPage(page + 1);
          if (io !== null) io.disconnect();
        }
      })
    })
    setIo(targetIO);
    fetchAPIData();
  }, [page])

  return (
    !cardListInfo.length
    ? <></>
    : <CardListPresenter cardListInfo={cardListInfo} registerObservingEl={registerObservingEl} />
  )
}

export default CardListContainer;
