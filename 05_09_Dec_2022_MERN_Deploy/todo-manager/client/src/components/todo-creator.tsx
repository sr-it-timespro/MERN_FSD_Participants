import { Button, Modal, Form } from "react-bootstrap";
import { useState, FormEvent, useRef } from "react";


// import ITodoItem, {ITodoCreateItem} from "../models/todo";
import ITodoItem, {ITodoCreateItem} from "../models/todo";

import {postNewTODO} from "../services/todo";

type TodoCreatorModel = {

  refreshParent : (newTodoItem : ITodoItem) => void;
}

const TODOCreator = (todoCreatorModel : TodoCreatorModel) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef =  useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = async (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoCreateItem : ITodoCreateItem = {
        title : titleRef?.current?.value as string,
        description : descriptionRef?.current?.value as string,
        createdDate: new Date()
    }


    console.log("Input ->" + JSON.stringify(todoCreateItem));
    const todoCreatedItem = await postNewTODO(todoCreateItem);
    console.log("Output ->" + JSON.stringify(todoCreatedItem));

    todoCreatorModel.refreshParent(todoCreatedItem);

    handleClose();
  };

  return (
    <>
      <Button variant="primary" className="float-end" onClick={handleShow}>
        Add a new TODO
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new TODO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddTodo}>
            <Form.Group className="mb-3" controlId="todoTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                ref={titleRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                ref={descriptionRef}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
            Add TODO Item
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { TODOCreator };
