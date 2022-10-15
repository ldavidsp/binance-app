import axios from 'axios';
import { createHmac } from 'crypto';

/**
 * Axios instance
 */
export const http = axios.create({
  baseURL: 'https://testnet.binance.vision/api/v3',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-MBX-APIKEY': process.env.APP_API_KEY ?? ''
  }
});

export const timestamp = `timestamp=${Date.now()}`;
export const signature = createHmac('sha256', process.env.APP_SECRET_KEY ?? '').update(timestamp).digest('hex');

export default {http, signature, timestamp}
