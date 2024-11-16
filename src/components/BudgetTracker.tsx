import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export default function BudgetTracker() {
  const { dispatch, state, totalExpenses, remainingBudget } = useBudget();

  const percentatge = +((totalExpenses * 100) / state.budget).toFixed(2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentatge}
          styles={buildStyles({
            pathColor: percentatge === 100 ? "#DC2626" : "#3b82f6",
            trailColor: "#F5F5F5",
            textSize: 8,
            textColor: percentatge === 100 ? "#DC2626" : "#3b82f6",
          })}
          text={`${percentatge}% Gastado`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          className="bg-pink-600 w-full p-2 text-white uppercase"
          type="button"
          onClick={() => dispatch({ type: "reset-app" })}
        >
          Resetear App
        </button>

        <AmountDisplay label="Presupuesto" amount={state.budget} />

        <AmountDisplay label="Disponible" amount={remainingBudget} />

        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
