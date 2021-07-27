import CardPresenter from "./CardPresenter";

const CardContainer = ({ cardInfo }) => {
  console.log("cardInfo", cardInfo)
  return (
    <CardPresenter cardInfo={cardInfo} />
  )
}

export default CardContainer;
