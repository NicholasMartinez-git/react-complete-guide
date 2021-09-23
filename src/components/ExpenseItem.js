import './ExpenseItem.css';

function ExpenseItem() {

    // illustrating dummy dynamic code form looking at dummy data.
    const expenseDate = new Date(2021, 9, 23);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67; 


    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;