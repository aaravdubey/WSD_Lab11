import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import editIcon from "./assets/pencil.png";
import deleteIcon from "./assets/delete.png";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = [...list];
      updatedTodos[index].value = editedTodo;
      setList(updatedTodos);
    }
  };

  return (
    <section className="container-fluid">
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
          backgroundColor: "black",
          color: "#fff",
          padding: "1rem 0"
        }}
        className="shadow"
      >
        TASK MANAGER
      </Row>

      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="my-4">
            <FormControl
              placeholder="add tasks... "
              size="lg"
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
              aria-label="add something"
              aria-describedby="basic-addon2"
              className="shadow rounded py-3"
            />
            <InputGroup className="d-flex justify-content-center">
              <Button
                variant="dark"
                className="mt-2 shadow fs-5"
                onClick={addItem}
              >
                &#43; ADD
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {list.map((item, index) => (
              <div key={index}>
                <ListGroup.Item
                  action
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "5px",
                    marginBottom: '1rem',
                  }}
                  className="shadow py-3 fs-5"
                >
                  {item.value}
                  <span style={{display: "flex"}}>
                    <Button
                      style={{ marginRight: "10px", display: "flex", alignItems: "center" }}
                      variant="light"
                      onClick={() => deleteItem(item.id)}
                    >
                      <img src={deleteIcon} /> Delete
                    </Button>
                    <Button
                      style={{ marginRight: "10px", display: "flex", alignItems: "center" }}
                      variant="light"
                      onClick={() => editItem(index)}
                    >
                      <img src={editIcon} /> Edit
                    </Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </section>
  );
}

export default App;
