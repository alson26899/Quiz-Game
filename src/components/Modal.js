import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function ModalControl() {
    const [showModal, setShowModal] = useState(true);

    const closeModal = () => {
        setShowModal(false);
    };

    const buttonStyle={
        backgroundColor:'#ea4e4e',
        padding:'10px',
        borderRadius:'5px',
        color:'#fff'
    };
    
    return (
        <div
        className="modal show"
        style={{ display: `${showModal ? 'block': 'none'}`, position: 'absolute' }}
        >
        <Modal show={showModal} onHide={closeModal}>
            <Modal.Header closeButton>
            <Modal.Title>Welcome to Swift skill deliveries!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>You will now be responsible to make 5 deliveries to your customers. During each delivery, you will pause when the signal is RED to answer a question. Every correct answer will gain you a star! A wrong answer will not fetch you any star. 

            You will be asked 5 questions in each delivery route - answer them all correct to gain 5 starts on your delivery!!

            You will have clues to answer your question - your customer will help you with it, but, you will lose half a star for disturbing your customer!

            To become a super star delivery agent and to complete your quiz, gain at least 3 stars in each of your deliver routes!

            Get, set, go !!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" style={buttonStyle} onClick={()=>closeModal()} >Get,Set,Quiz!</Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
}

export default ModalControl;