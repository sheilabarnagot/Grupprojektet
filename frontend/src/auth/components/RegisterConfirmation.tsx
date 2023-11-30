import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

interface Props {
  termsAccepted: boolean;
  setTermsAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterConfirmation = ({ termsAccepted, setTermsAccepted }: Props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleUserTerms = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', termsAccepted);
    handleClose();
  };

  return (
    <>
      <Modal show={show}>
        <div className="bg-slate-600 rounded-md">
          <Modal.Header closeButton>
            <Modal.Title className="text-black">
              Acceptera användarvillkor
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleUserTerms}>
            <Modal.Body>
              {' '}
              <p className="mb-4">
                Välkommen till vår webbapplikation! För att säkerställa din
                integritet och ge dig en bättre användarupplevelse använder vi
                cookies och behandlar vissa personuppgifter. Vi värnar om din
                integritet och strävar efter att vara transparenta gällande hur
                vi samlar in, använder och skyddar dina uppgifter.
              </p>
              <p>
                För att använda våra tjänster behöver du acceptera vår
                integritetspolicy. Den hittar du på sidan om
                <NavLink className="ml-2" to="/gdpr">
                  <span className="underline text-blue-400">
                    integritet och cookies
                  </span>
                </NavLink>
              </p>
              <Form.Check
                onClick={e => {
                  const target = e.target as HTMLFormElement;
                  setTermsAccepted(
                    target.checkValidity() && !target.valueMissing
                  );
                }}
                className="mt-4"
                type="switch"
                required
                id="custom-switch"
                label="Acceptera användarvillkor"
              />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                disabled={!termsAccepted}
                type="submit"
                value="save changes">
                Accept
              </Button>
            </Modal.Footer>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default RegisterConfirmation;
