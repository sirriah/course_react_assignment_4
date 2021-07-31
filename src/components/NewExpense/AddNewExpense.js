
const AddNewExpense = (props) => {
    //props.displayNewButton();

    const submitHandler = (event) => {
        event.preventDefault();
        props.onDisplayNewButton(true);

    }


    return <form onSubmit={submitHandler}><button type="submit">{props.children}</button></form>
}
export default AddNewExpense;