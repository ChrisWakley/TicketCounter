import employees from "../../data/employees";
import "./CounterContainer.scss";

const CounterContainer = (props) => {
    const { name, role } = props;
    console.log(name, role);
    const employeeListJSX = employees.map((employee, index) => (
        
        <div className="employee__tile"
        key={name + (index + 1)}>
            <h2>{employee.name}</h2>
            <h2>{employee.role}</h2>
        </div>
    ));
    return (
        <>
        <div className="employee__cards">{employeeListJSX}</div>
        </>
    );
};

export default CounterContainer;