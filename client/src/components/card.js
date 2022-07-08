import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardGroup,
  CardSubtitle,
  CardText,
  CardImgOverlay,
} from "reactstrap";

function card() {
  return (
    <div>
      <CardGroup>
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="50%"
          />
          <CardImgOverlay>
            <CardTitle tag="h5">Card Title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardImgOverlay>
          <CardBody>
            <CardTitle tag="h5">Bicycle TDR 150</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              $200
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default card;
