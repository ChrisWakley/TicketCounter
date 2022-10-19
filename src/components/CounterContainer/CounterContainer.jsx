import employees from "../../data/employees";
import "./CounterContainer.scss";
import Counter from "../Counter/Counter.jsx";

const CounterContainer = (props) => {
    const { name, role } = props;
    console.log(name, role);
    const employeeListJSX = employees.map((employee, index) => (
        
        <div className="employee__tile"
        key={name + (index + 1)}>
            <img src={employee.image} alt="" className="employee__image" />
            <h2 className="employee__text employee__text--name">{employee.name}</h2>
            <h2 className="employee__text employee__text--role">{employee.role}</h2>
            <Counter />
        </div>
    ));
    return (
        <>
        <div className="employee__cards">{employeeListJSX}</div>
        </>
    );
};

export default CounterContainer;