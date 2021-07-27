import styled from "styled-components";

import CardContainer from "../Card/CardContainer";

const CardListPresenter = ({ cardListInfo }) => {

  return (
    <CardListPresenterLayout>
      {cardListInfo.map((cardInfo) => <CardContainer cardInfo={cardInfo} />)}
    </CardListPresenterLayout>
  )
}

const CardListPresenterLayout = styled.div`
  border: 2px solid red;
`


export default CardListPresenter;
