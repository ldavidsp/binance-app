import { Router } from 'express';
import { losersInformation, acountInformation, loserLimitInformation } from '../controllers/BinanceController';

const router = Router();
router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.get("/losers", losersInformation);
router.get("/account", acountInformation);
router.get("/limit", loserLimitInformation);

export default router;
