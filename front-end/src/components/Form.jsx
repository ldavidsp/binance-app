import {useState} from "react";

export const Form = ({ calculateInterest }) => {
  const [form, setForm] = useState({
    amount: 0,
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitData = (event) => {
    event.preventDefault();
    if (form.amount.trim().length === 0) {
      return false;
    }

    calculateInterest(form);
  }

  return (
    <form
      onSubmit={onSubmitData}
      className="mx-auto w-2/5">
      <div>
        <label form="amount" className="block py-3 text-gray-700 font-bold">
          Ingrese el monto en Dolares
        </label>
        <div className="flex items-center p-2 border rounded-md">
          <input
            type="number"
            placeholder="USD"
            id="amount"
            name={'amount'}
            onChange={handleChange}
            defaultValue={form.amount}
            className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent font-bold text-lg "
          />
        </div>
      </div>

      <button
        type='submit'
        className={'mt-6 py-3 font-bold rounded-full text-lg px-8 rounded-3xl text-center text-white bg-blue-600 shadow transform hover:bg-blue-700 hover:shadow-lg'}>
        Calcular
      </button>
    </form>
  )
}
