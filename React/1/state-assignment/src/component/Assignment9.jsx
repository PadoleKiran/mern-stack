import { useState } from "react";

export default function Assignment9() {

    let [table, setTable] = useState({
        title: "",
        ammount: "",
    });

    let [expense, setExpense] = useState([]);

    function handleTable() {
        if (table.title.trim() === "" || table.ammount.trim() === "") return;

         setExpense([...expense, table]);

        // clear the inputs
        setTable({
            title: "",
            ammount: ""
        });
    }

    function handleValue(e) {
        setTable({
            ...table,
            [e.target.name]: e.target.value
        });
    }

    const total = expense.reduce((sum, item) => {
        return sum + Number(item.ammount);
    }, 0
    );

    return (
        <>
            <div>
                <h2>Assignment 9: Expense Tracker</h2>
                <input type="text" name="title" placeholder="Expense title" onChange={handleValue}  value={table.title}/>
                <input type="text" name="ammount" placeholder="Amount" onChange={handleValue} value={table.ammount}/>
                <button onClick={handleTable}>Add Expense</button>

                <h2>Expenses</h2>
                <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Ammount</th>
                    </tr>
                </thead>

                <tbody>
                    {expense.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.ammount}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                <h4>Total: {total}</h4>
            </div>
        </>




    );
}