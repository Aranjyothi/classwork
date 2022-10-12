import EmployeeListItem from "./EmployeeListItem";
import data from "../Data";
function EmployeeList(){
    return(
        <div className="employee-container">
            <h1> Employee List:</h1>
            {/* Map method */}
            {data.map((datas,index)=>{
                return<EmployeeListItem key={index}whichEmployee={datas}/>
            })}
                      
          
        </div>
    )
}
export default EmployeeList;