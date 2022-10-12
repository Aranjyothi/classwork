function EmployeeListItem(props){
    return(
        <div className="employees">
            <img src={props.whichEmployee.image}/>
            <h2> Name: {props.whichEmployee.name}</h2>
            <h3> Title: {props.whichEmployee.title}</h3>
           
        </div>
    )
}
export default EmployeeListItem;