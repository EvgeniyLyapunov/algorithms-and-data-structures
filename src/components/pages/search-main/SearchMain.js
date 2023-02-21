import { Row, Col } from 'react-bootstrap';

import ThemeCard from '../../theme-card/ThemeCard';

import './search-main.scss';

const SearchMain = () => {

  return(
    <div className='search-page'>
      <h2 className='text-center mb-1'>Алгоритмы поиска</h2>
      <p className='text-center mb-3'>Описание, Реализация на JS, Комментарии к коду</p>
      <Row>
      <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Бинарный поиск'} 
            path={'/search/binarysearch'}
            back={'/'}
            bgColor={'#0081a7'}
            btnColor={'light'}/>
        </Col>
      </Row>
    </div>
  )
}

export default SearchMain;