import styled from "styled-components";

import CardContainer from "../Card/CardContainer";

const CardListPresenter = ({ cardListInfo }) => {

  return (
    <CardListPresenterLayout>
      <CardListPresenterLayer>
      {cardListInfo.map((cardInfo) => <CardContainer cardInfo={cardInfo} />)}
      </CardListPresenterLayer>
    </CardListPresenterLayout>
  )
}

const CardListPresenterLayout = styled.div`
`

const CardListPresenterLayer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 500px;
  padding: 33px 470px 0 470px;
`


export default CardListPresenter;
