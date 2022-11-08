import { rest } from "msw";
import { mockRobots } from "./mockRobots";

const { REACT_APP_API_URL: apiUrl } = process.env;

export const handlers = [
  rest.get(`${apiUrl}robots`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockRobots));
  }),
];
