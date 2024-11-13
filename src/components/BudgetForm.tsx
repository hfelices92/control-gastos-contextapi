import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);

  const {dispatch} = useBudget();

  const isValid = useMemo(() => {
    return budget > 0 && !isNaN(budget);
  }, [budget]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(+e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault

    dispatch({type:'add-budget', payload:{budget:budget}})
  };
  return (
    <>
      <form action="" className="space-y-5"  onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className="text-4xl text-blue-600 font-bold text-center"
          >
            Definir Presupuesto
          </label>
          <input
            id="budget"
            type="number"
            className="w-full bg-white border-gray-200 p-2"
            placeholder="Define tu presupuesto"
            name="budget"
            value={budget}
            onChange={handleChange}
          />
        </div>

        <input
          type="submit"
          value="Definir Presupuesto"
          disabled={!isValid}
          className="bg-blue-600 w-full hover:bg-blue-700 cursor-pointer p-2 text-white font-black uppercase disabled:opacity-40"
        />
      </form>
    </>
  );
}
