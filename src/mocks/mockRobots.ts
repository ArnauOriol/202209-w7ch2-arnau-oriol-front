import { Robot } from "../types/types";

export const mockRobots: Robot[] = [
  {
    stats: {
      speed: 1,
      strength: 10,
      createdAt: "2022-11-06T17:05:38.649Z",
    },
    id: "636563d18d7ffccdc807e73d",
    name: "machacatuercas",
    image: "https//robot.png",
  },
  {
    stats: {
      speed: 5,
      strength: 2,
      createdAt: "2022-11-06T17:05:38.649Z",
    },
    id: "636563d18d7ffccdc807e73f",
    name: "bender",
    image: "https//robotito.png",
  },
];

export const robotMock: Robot = {
  stats: {
    speed: 1,
    strength: 10,
    createdAt: "2022-11-06T17:05:38.649Z",
  },
  id: "636563d18d7ffccdc807e73d",
  name: "machacatuercas",
  image: "https//robot.png",
};
