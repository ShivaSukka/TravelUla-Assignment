import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Itinerary.css";

const itineraryData = [
  {
    day: "Day 1 - Nov 14th 2023",
    title: "Arrival & First Game Drive",
    image: "https://images.unsplash.com/photo-1517001170041-70a5966d5402?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: `Our drivers would pick you up from the **JKIA airport at 7 AM**. You would board our **4x4 Land Cruisers** to embark on your journey to **Maasai Mara**. The road journey takes about **5 to 6 hours**, but you would be amazed by the landscape en route.

    You would first see the **Nairobi National Park** on your left side. On a lucky day, you might spot a **White Rhino grazing** near the fence. **Nairobi is the only city in the world with a national park within city limits!** This park is home to **lions, leopards, white rhinos, gazelles, giraffes, crowned cranes**, and many other species.
    `,
  },
  {
    day: "Day 2 - Nov 15th 2023",
    title: "Sunrise, Big Cats & Leopard Tracking",
    image: "https://images.unsplash.com/photo-1576219944620-cac2c523ce22?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: `Wake up early and head to the restaurant for a **hot cup of coffee or tea**. **Mornings at Mara are chilly**, so wear a **fleece jacket** before your game drive.

    Your **breakfast will be packed**, allowing you to enjoy a **sunrise game drive**. Witnessing the **sunrise at Maasai Mara** is a breathtaking experience, unique to this beautiful landscape—just pray it **doesn’t rain!**
    `,
  },
  {
    day: "Day 3 - Nov 16th 2023",
    title: "Full-Day Safari at Sand River & The Big 5",
    image: "https://images.unsplash.com/photo-1535940587896-3a4e0ce292f4?q=80&w=2104&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: `Today is a **very busy day** at Mara! Wake up early, freshen up, and enjoy a **hot beverage** before boarding your vehicle. Today, you will head towards the **border of Maasai Mara**, embarking on a **full-day game drive** with **packed breakfast and lunch**.

    The **Sand River** marks the border between **Maasai Mara (Kenya) and Tanzania**. This river has been the **entry point for migratory animals for millions of years**. You will be amazed at how a **small river separates two different countries!**
    `,
  },
  {
    day: "Day 4 - Nov 17th 2023",
    title: "Farewell to Maasai Mara & Return to Nairobi",
    image: "https://images.unsplash.com/photo-1610982330184-b26f7ea46541?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: `Wake up **at leisure** and enjoy a **hearty breakfast** while reflecting on your **incredible journey** with your group. Discuss the **best moments**, share photos, and reminisce about the **breathtaking safaris**.`,
  },
];

const Itinerary = () => {
  return (
    <Container id="itinerary" className="my-5">
      <h2 className="text-center mb-4">**Detailed Itinerary**</h2>
      <Row>
        {itineraryData.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={item.image} alt={`Image for ${item.day}`} />
              <Card.Body>
                <Card.Title>**{item.day}: {item.title}**</Card.Title>
                <Card.Text>{item.details}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Location Section at the End */}
      <div className="text-center mt-5">
        <h4>📍 **Location**</h4>
        <p>
          <strong>Maasai Mara National Reserve, Kenya</strong>
        </p>
        <p>
          <a 
            href="https://maps.app.goo.gl/DzPRkDZyx6rhZwF56" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on Google Maps
          </a>
        </p>
      </div>
    </Container>
  );
};

export default Itinerary;
