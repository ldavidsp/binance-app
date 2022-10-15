export const Card = ({coin}) => {
  let dollarUSLocale = Intl.NumberFormat('en-US');
  let price = dollarUSLocale.format(coin?.p || 0);

  return (
    <div className="w-3/5 px-8 py-4 bg-white border border-gray-100 rounded-3xl shadow-lg mb-10">
      <div className="mt-2 justify-start flex text-2xl font-bold text-gray-700">
        USD {price}
      </div>

      <div className="flex items-center justify-start mt-4">
        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
            src={coin?.s === 'BTCUSDT' ? '/bitcoin.png' : '/ethereum.png'}
            alt={coin?.s}/>
          <a
            className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
            {coin?.s}
          </a>
        </div>
      </div>
    </div>
  )
}

