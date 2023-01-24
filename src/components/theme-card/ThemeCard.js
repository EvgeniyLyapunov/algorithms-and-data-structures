import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ThemeCard = (props) => {

  return(
    <Card className='m-3'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link className='me-3 btn btn-outline-primary' to={props.path}>Перейти</Link>
        {props.back ? <Link className='btn btn-outline-primary' to={props.back}>Назад</Link> : null}
      </Card.Body>
    </Card>
  )
}

export default ThemeCard;