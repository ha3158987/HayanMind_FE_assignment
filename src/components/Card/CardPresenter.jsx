import styled from "styled-components";

const CardPresenter = ({ cardInfo }) => {
  const { id, email, body } = cardInfo;

  return (
    <CardPresenterLayout>
      <div>{id}</div>
      <div>{email}</div>
      <div>{body}</div>
    </CardPresenterLayout>
  )
}

const CardPresenterLayout = styled.div`
  border: 2px solid green;
`

export default CardPresenter;
