import styled from "styled-components";

const RobotCardListStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  .list {
    &__title {
      font-weight: 800;
      margin-bottom: 30px;
    }
    &__wrapper {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      column-gap: 20px;
      row-gap: 50px;
      justify-items: center;
    }
  }
`;

export default RobotCardListStyled;
