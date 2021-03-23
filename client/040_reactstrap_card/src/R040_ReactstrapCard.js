import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class R040_ReactstrapCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardImg top height="250px" width="139px" src="https://html5hive.org/wp-content/uploads/2020/12/HTML5-Original-Filtered-min.png" alt="Card image cap" />
          {/* <CardImg top height="318px" width="180px" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" /> */}
          <CardBody>
            <CardTitle>Card 제목</CardTitle>
            <CardSubtitle>Card 부제목</CardSubtitle>
            <CardText>Card 내용 Lorem Ipsum is simply dummy text.</CardText>
            <Button>버튼</Button>
          </CardBody>
        </Card>
      </div>
      )
  }
}

export default R040_ReactstrapCard;
