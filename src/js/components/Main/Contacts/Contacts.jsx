import React from 'react'
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";

const Contacts = (props) => {
  console.log(props);
  props.getContacts();
  console.log(props);
  return (
      <Container>
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>)
}

Contacts.propTypes={
  getContacts:PropTypes.func
}

export default Contacts;