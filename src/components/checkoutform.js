import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

function Checkoutform() {
  return (
    <div style={{ margin: '1rem 1rem 0rem 2rem' }}>
      <h5>Billing details</h5>
      <Form>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Firstname</Form.Label>
              <Form.Control placeholder="e.g Ben" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Lastname</Form.Label>
              <Form.Control placeholder="e.g Bruce" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group controlId="fromGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="yourname@example.com" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="102,arogundade street" />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="e.g Ibadan" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control placeholder="e.g Oyo" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control />
            </Form.Group>
          </Col>
        </Form.Row>
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Save billing details" />
        </Form.Group>
        <Button type="submit">Proceed to Payment</Button>
      </Form>
    </div>
  );
}

export default Checkoutform;
