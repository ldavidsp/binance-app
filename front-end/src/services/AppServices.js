export function getInterestCalculate(form, btc, eth) {
  const amount = parseFloat(form.amount);
  const btcAmount = parseFloat(btc?.p);
  const ethAmount = parseFloat(eth?.p);
  const exchangeBitcoin = (1 / btcAmount);
  const exchangeEthe = (1 / ethAmount).toFixed(2);

  /**
   * Bitcoin 5%.
   * @type {number}
   */
  const bit5Month = (amount * (exchangeBitcoin * 1.05));
  const bit5Year = (amount * (exchangeBitcoin * 1.6));
  const dollar5Month = (amount * 1.05);
  const dollar5Year = (amount * 1.6);

  /**
   * Ethereum 3%.
   * @type {number}
   */
  const eth3Month = (amount * (exchangeEthe * 1.03));
  const eth3Year = (amount * (exchangeEthe * 1.36));
  const dollar3Month = (amount * 1.03);
  const dollar3Year = (amount * 1.36);

  return [
    {
      name: 'Bitcoin',
      symbol: 'BTCUSDT',
      dollar_month: dollar5Month.toFixed(2),
      dollar_year: dollar5Year.toFixed(2),
      coin_month: bit5Month.toFixed(7),
      coin_year: bit5Year.toFixed(7)
    },
    {
      name: 'Ethereum',
      symbol: 'ETHUSDT',
      dollar_month: dollar3Month.toFixed(2),
      dollar_year: dollar3Year.toFixed(2),
      coin_month: eth3Month.toFixed(7),
      coin_year: eth3Year.toFixed(7)
    },
  ];
}

