import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p> There are no expenses.</p>;
  } else {
    return props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
};

export default ExpenseList;
