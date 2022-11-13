
import { Button, Modal, Form } from "react-bootstrap"
import { useState, useRef, FormEvent } from "react";
import { ITodoCreateItem } from "../models/todo-model";
import {postNewTodoItem} from "../services/todo-service";

const TodoCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = async (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    const todoCreateItem : ITodoCreateItem = {
      title: titleRef?.current?.value as string,
      description: descriptionRef?.current?.value as string,
      createdDate: new Date()
    }

    console.log(todoCreateItem);
    const response = await postNewTodoItem(todoCreateItem);
    console.log("Response is " + JSON.stringify(response));

    handleClose();
  }

  return (

    <>

      <Button variant="primary" className="float-end" onClick={handleShow}>Add New Todo</Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>New Todo Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form onSubmit={handleAddTodo}>

            <Form.Group className="mb-3" controlId="todoTitle">
              <Form.Label>Todo Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Todo Title" ref={titleRef}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoDescription">
              <Form.Label>Todo Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Todo Description" ref={descriptionRef}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add New Todo
            </Button>
          
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Form>

        </Modal.Body>

      </Modal>

    </>
  )
}

export { TodoCreator }