import styled from "styled-components";

const CardPresenter = ({ cardInfo }) => {
  const { id, email, body } = cardInfo;

  return (
    <CardPresenterLayout>
      <CardPresenterLayer>
        <CardPresenterBlock><CardPresenterSpan>Comment Id</CardPresenterSpan> {id}</CardPresenterBlock>
        <CardPresenterBlock><CardPresenterSpan>Email</CardPresenterSpan> {email}</CardPresenterBlock>
        <CardPresenterBlock><CardPresenterDiv>Comment</CardPresenterDiv> {body}</CardPresenterBlock>
      </CardPresenterLayer>
    </CardPresenterLayout>
  )
}



const CardPresenterLayout = styled.div`
  width: 500px;
  height: 193px;
  left: 470px;
  top: 33px;

  background: #F8F9FA;
  border: 0.5px solid #CED4DA;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 12px;
`

const CardPresenterLayer = styled.div`
  padding: 20px;
`

const CardPresenterBlock = styled.div`
  padding-bottom: 12px;
`

const CardPresenterSpan = styled.span`
  font-weight: bold;
  margin-right: 5px;
`

const CardPresenterDiv = styled.div `
  font-weight: bold;
  margin-right: 5px;
  margin-bottom: 5px;
`

export default CardPresenter;
