import {CSVLink} from "react-csv";

export const Table = ({row, amount}) => {
  const headers = [
    {label: 'Nombre', key: 'name'},
    {label: 'Moneda', key: 'symbol'},
    {label: 'Mes 1 Dolar', key: 'dollar_month'},
    {label: 'Mes 1', key: 'dollar_month'},
    {label: 'Mes 12', key: 'yearh'},
  ];

  return (
    <div className="overflow-x-auto w-full mt-12 border border-gray-100 rounded-3xl shadow-lg p-3">
      <h1 className={'text-2xl font-bold mt-2 mb-4'}>Inversion: <span className={'text-sky-500'}>{amount} USD</span>
      </h1>
      {row.length > 0 && <CSVLink
        filename={'inversion.csv'}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        data={row}>
        Descargar CSV
      </CSVLink>}

      <table className="table w-full mt-7">
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Mes 1</th>
          <th>Mes 12</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {
          row.map((item, index) => {
            return (
              <tr key={index} className={'border border-l-0 border-r-0'}>
                <td className={'pb-4 pt-4'}>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item?.symbol === 'BTCUSDT' ? '/bitcoin.png' : '/ethereum.png'}
                          alt={item.name}/>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={'font-bold'}>USD</span> {item.dollar_month} / {item.coin_month}</td>
                <td>USD {item.dollar_year} / {item.coin_year}</td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}
