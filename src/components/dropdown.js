import Form from 'react-bootstrap/Form';
 import "./modal.css";
function DropDown() {
  return (
    <Form.Select className='custom-select' aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default DropDown;