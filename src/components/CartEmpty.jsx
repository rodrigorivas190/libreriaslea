import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            >
                <Modal.Header>
                    <Modal.Title>¡ATENCIÓN!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Debe agregar productos al carrito
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/">
                        <Button variant="dark">Agregar productos</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

