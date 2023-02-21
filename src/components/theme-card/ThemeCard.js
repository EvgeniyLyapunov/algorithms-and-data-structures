import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ThemeCard = (props) => {

  const {title, text, path, back, bgColor, btnColor} = props;

  const cardStyle = {
    backgroundColor: bgColor,
    minHeight: 150
  }

  const cardTitleStyle = {
    marginBottom: text ? 30 : 70
  }

  const descr = text ? text.split(',')
                            .map(item => <li>{item}</li>) 
                            : null;

  return(
    <Card className='m-3 shadow p-1 mb-5 bg-body rounded'>
      <Card.Body style={cardStyle}>
        <Card.Title style={cardTitleStyle}>{title}</Card.Title>
        <ul>
          {descr}
        </ul>
        <Link className={`me-3 btn btn-outline-${btnColor}`} to={path}>Перейти</Link>
        {props.back ? <Link className={`btn btn-outline-${btnColor}`} to={back}>Назад</Link> : null}
      </Card.Body>
    </Card>
  )
}

export default ThemeCard;