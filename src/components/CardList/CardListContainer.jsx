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
  //intersectionObserver의 인스턴스를 생성하고, 콜백함수로 관찰대상 요소가 들어올 경우 어떤 후속처리를 할 지 정의해준다.
    // useEffect에서 선언.

  //관찰대상 DOM요소를 등록하는 함수를 정의한다.
  const registerObservingEl = (el) => {
    io.observe(el);
  }

  //위 등록 함수를 관찰대상 DOM이 생성되는 곳까지 props로 내려준다.
    //props로 CardPresenter컴포넌트까지 registerObservingEl함수를 내려줌.

  useEffect(() => {
    const targetIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          //다음 페이지의 card데이터를 fetch 해온다.
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
