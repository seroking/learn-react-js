import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          + Add Employee
        </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="w-full max-w-xs">
          <form onSubmit={ (e) => {
            
            e.preventDefault();
            props.newEmployee(name, role, img);
            setName('');
            setRole('');
            setImg('');

          }}
          id="editModal" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                Full name
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="name" type="text" placeholder="name" value={name} onChange={
                (e) => {setName(e.target.value)}
               }/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                Role
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="role" type="text" placeholder="role" value={role} onChange={
                (e) => {setRole(e.target.value)}
              }/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" for="img">
                Img URL
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="role" type="text" placeholder="https://google.com" value={img} onChange={
                (e) => {setImg(e.target.value)}
              }/>
            </div>
          </form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}  className='bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded'>Close</button>
          <button onClick={handleClose} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' form='editModal'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;