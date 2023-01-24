import { Row, Col } from 'react-bootstrap';

import ThemeCard from '../../theme-card/ThemeCard';

import './search-page.scss';

const SearchPage = () => {

  return(
    <div className='search-page'>
      <Row>
      <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Алгоритм Бинарный поиск'} 
            text={'описание, реализация на js, комментарии к коду'}
            path={'/search/binarysearch'}
            back={'/'}/>
        </Col>
      </Row>
    </div>
  )
}

export default SearchPage;