import CardPresenter from "./CardPresenter";

const CardContainer = ({ cardInfo, registerObservingEl }) => {
  return (
    <CardPresenter cardInfo={cardInfo} registerObservingEl={registerObservingEl} />
  )
}

export default CardContainer;
