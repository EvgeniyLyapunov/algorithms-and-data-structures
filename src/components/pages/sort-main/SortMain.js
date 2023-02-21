
import { Row, Col } from 'react-bootstrap';

import ThemeCard from '../../theme-card/ThemeCard';

import './sort-main.scss'

const SortMain = () => {
  return(
    <div className='sort-page'>
      <h2 className='text-center mb-1'>Алгоритмы сортировки</h2>
      <p className='text-center mb-3'>Описание, Реализация на JS, Комментарии к коду</p>
      <Row>
        <Col lg={4} md={6} sm={12}>
            <ThemeCard
              title={'Сортировка пузырьком'} 
              path={'/sort/bubblesort'}
              back={'/'}
              bgColor={'#00afb9'}
              btnColor={'light'}/>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ThemeCard
              title={'Сортировка слиянием'} 
              path={'/sort/mergesort'}
              back={'/'}
              bgColor={'#f07167'}
              btnColor={'light'}/>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ThemeCard
              title={'Быстрая сортировка'} 
              path={'/sort/quicksort'}
              back={'/'}
              bgColor={'#0081a7'}
              btnColor={'light'}/>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ThemeCard
              title={'Cортировка Подсчётом'} 
              path={'/sort/countsort'}
              back={'/'}
              bgColor={'#fdfcdc'}
            btnColor={'info'}/>
          </Col>
      </Row>
    </div>
  )
}

export default SortMain;