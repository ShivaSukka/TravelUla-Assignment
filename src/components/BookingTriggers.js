import React from "react";
import { Container, Button, Alert } from "react-bootstrap";

const BookingTriggers = () => {
  return (
    <Container className="text-center my-5">
      <Alert variant="success">
        🎉 **Limited Offer:** Book before **August 14th, 2023**, and save **$260 per person**!
      </Alert>
      <Button variant="primary" href="/special-offer">
        Unlock Exclusive Deals
      </Button>
    </Container>
  );
};

export default BookingTriggers;
