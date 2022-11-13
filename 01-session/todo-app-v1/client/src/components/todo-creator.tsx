
import { Button, Modal, Form } from "react-bootstrap"
import { useState } from "react";

const TodoCreator = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>

      <Button variant="primary" className="float-end" onClick={handleShow}>Add New Todo</Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>New Todo Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form>

            <Form.Group className="mb-3" controlId="todoTitle">
              <Form.Label>Todo Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Todo Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoDescription">
              <Form.Label>Todo Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Todo Description" />
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