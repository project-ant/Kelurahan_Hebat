import React from 'react';
import App from '../../../App.css';
import {Card, CardGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Gambar from '../../../assets/images/Paceda.svg';

const News = (props) => {
  return (
    <div>
    <div>
  <CardGroup>
  <Card className="row1">
    <Card.Img variant="top" src={"https://situsbudaya.id/wp-content/uploads/2019/05/Kota-Bitung.jpg"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="row1" >
    <Card.Img variant="top" src={"https://situsbudaya.id/wp-content/uploads/2019/05/Kota-Bitung.jpg"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="row1">
    <Card.Img variant="top" src={"https://situsbudaya.id/wp-content/uploads/2019/05/Kota-Bitung.jpg"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
    <div>
  <CardGroup>
  <Card className="row2">
    <Card.Img variant="top" src={"https://situsbudaya.id/wp-content/uploads/2019/05/Kota-Bitung.jpg"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="row2">
    <Card.Img variant="top" src={"https://situsbudaya.id/wp-content/uploads/2019/05/Kota-Bitung.jpg"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className="row2">
    <Card.Img variant="top" src={"https://situsbudaya.id/wp-content/uploads/2019/05/Kota-Bitung.jpg"} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </div>
    </div>
  );
};

export default News;