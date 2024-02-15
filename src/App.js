import './index.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';


function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
  [
    {id: 1, name: "Sero", role: "Web Dev", img: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 2, name: "Benou", role: "Rapper", img: "https://images.pexels.com/photos/1550469/pexels-photo-1550469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 3, name: "Mel", role: "Singer", img: "https://images.pexels.com/photos/7086304/pexels-photo-7086304.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 4, name: "Lazzy", role: "gamer", img: "https://images.pexels.com/photos/7047535/pexels-photo-7047535.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 5, name:"garou", role: "Diib", img: "https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 6, name: "Drake", role: "Dragon", img: "https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg?auto=compress&cs=tinysrgb&w=600"}
  ]
  )

  function updateEmployee(id, newName, newRole){
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id){ 
        return {...employee, name: newName, role: newRole};
      }
      return employee;
    })
    setEmployees(updatedEmployee);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee]);
  }

  const showEmployee = true;
  return (
    <div className="App">
        {
          showEmployee ? (
            <>
              <input type='text' onChange={ (e) => {
                setRole(e.target.value);
              }}/>
              <div className='flex flex-wrap justify-center'>
                {employees.map((employee) => {
                  const editEmployee = (
                    <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee}/>
                  )

                  return (
                    <Employee 
                      key={employee.id}
                      id={employee.id}
                      name={employee.name} 
                      role={employee.role} 
                      img={employee.img}
                      editEmployee={editEmployee}
                    />
                    );
                })}
              </div>
              <AddEmployee newEmployee={newEmployee} />
            </>
          )
          : 
          <p1>"connot see the employee"</p1>
        }
    </div>
  );
}

export default App;
