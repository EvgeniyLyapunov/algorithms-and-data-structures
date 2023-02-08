import { Row, Col } from 'react-bootstrap';

import ThemeCard from '../../theme-card/ThemeCard';

import './main-page.scss';

const MainPage = () => {

  return(
    <div className='main-page'>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Алгоритмы поиска'} 
            text={'Бинарный поиск'}
            path={'/search'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Алгоритмы сортировки'} 
            text={'Сортировка пузырьком, Сортировка слиянием'}
            path={'/sort'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Структуры данных'} 
            text={'Раздел пока пустой'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Графы'} 
            text={'Раздел пока пустой'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Деревья'} 
            text={'Раздел пока пустой'}/>
        </Col>
      </Row>
    </div>
  )
}

export default MainPage;