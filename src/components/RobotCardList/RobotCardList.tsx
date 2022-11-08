import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import RobotCard from "../RobotCard/RobotCard";
import RobotCardListStyled from "./RobotCardListStyled";

const RobotCardList = (): JSX.Element => {
  const { getRobots } = useApi();
  const robots = useAppSelector((state) => state.robots.list);

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <RobotCardListStyled>
      <h1 className="list__title">ROBOTS</h1>
      <ul className="list__wrapper">
        {robots.map((robot, index) => (
          <RobotCard robot={robot} key={index} />
        ))}
      </ul>
    </RobotCardListStyled>
  );
};

export default RobotCardList;
