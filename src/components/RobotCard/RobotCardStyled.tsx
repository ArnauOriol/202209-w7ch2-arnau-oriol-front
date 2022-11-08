import styled from "styled-components";

const RobotCardStyled = styled.li`
  max-height: 500px;
  max-width: 320px;
  border: 2px solid #2f2f2f;
  padding: 10px;
  list-style: none;
  border-radius: 25px;
  .robot {
    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__name {
      width: 100%;
      text-align: center;
      margin-bottom: 5px;
      font-weight: 800;
    }
    &__image {
      max-width: 300px;
      height: 300px;
      object-fit: contain;
      background-color: #828567;
      border: 2px solid #2f2f2f;
      border-radius: 25px;
    }
    &__stats-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__speed,
    &__strength,
    &__date {
      .bold {
        font-weight: 800;
      }
    }
  }
`;

export default RobotCardStyled;
