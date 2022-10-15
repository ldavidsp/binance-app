import {Request, Response} from 'express';
import {getLosersInformation, getAccountInformation, getLoserLimitInformation} from "../services/BinanceService";

/**
 * Losers Information
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const losersInformation = async (req: Request, res: Response) => {
  const response = (await getLosersInformation)
  res.json(response);
};

/**
 * Acount Information.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const acountInformation = async (req: Request, res: Response) => {
  const response = (await getAccountInformation)
  res.json(response);
};

/**
 * Loser Limit Information.
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export const loserLimitInformation = async (req: Request, res: Response) => {
  const response = await getLoserLimitInformation
  res.json(response);
};

export default {losersInformation, acountInformation, loserLimitInformation};
