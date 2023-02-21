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
            path={'/search'}
            bgColor={'#0081a7'}
            btnColor={'light'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Алгоритмы сортировки'} 
            text={'Сортировка пузырьком, Сортировка слиянием, Быстрая сортировка, Сортировка Подсчётом'}
            path={'/sort'}
            bgColor={'#00afb9'}
            btnColor={'light'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Структуры данных'} 
            text={'Раздел пока пустой'}
            bgColor={'#fdfcdc'}
            btnColor={'info'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Графы'} 
            text={'Раздел пока пустой'}
            bgColor={'#fed9b7'}
            btnColor={'danger'}/>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ThemeCard
            title={'Деревья'} 
            text={'Раздел пока пустой'}
            bgColor={'#f07167'}
            btnColor={'light'}/>
        </Col>
      </Row>
    </div>
  )
}

export default MainPage;