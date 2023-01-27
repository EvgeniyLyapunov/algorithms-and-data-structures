import { Row, Col } from 'react-bootstrap';

import ThemeCard from '../../theme-card/ThemeCard';

import './search-main.scss';

const SearchMain = () => {

  return(
    <div className='search-page'>
      <h2 className='text-center mb-3'>Алгоритмы поиска</h2>
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

export default SearchMain;