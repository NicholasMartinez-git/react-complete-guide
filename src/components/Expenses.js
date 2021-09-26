import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  for (let i = 0; i < props.length; i++) {
    <ExpenseItem
      title={props[i].title}
      amount={props[i].amount}
      date={props[i].date}
    />;
  }

  return (
    <div className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
