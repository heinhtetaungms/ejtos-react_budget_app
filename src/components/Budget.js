// Updated Budget Component
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const newBudgetValue = parseInt(event.target.value);

        // Calculate the total spending
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        // Check if the new budget is lower than the total spending
        if (newBudgetValue < totalExpenses) {
            alert("Budget cannot be lower than total spending.");
        } else {
            setNewBudget(newBudgetValue);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudgetValue,
            });
        }
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};

export default Budget;
