
import { Row, Col } from 'react-bootstrap';

import ThemeCard from '../../theme-card/ThemeCard';

import './sort-main.scss'

const SortMain = () => {
  return(
    <div className='sort-page'>
      <h2 className='text-center mb-3'>Алгоритмы сортировки</h2>
      <Row>
        <Col lg={4} md={6} sm={12}>
            <ThemeCard
              title={'Алгоритм Сортировка пузырьком'} 
              text={'описание, реализация на js, комментарии к коду'}
              path={'/sort/bubblesort'}
              back={'/'}/>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <ThemeCard
              title={'Алгоритм Сортировка слиянием'} 
              text={'описание, реализация на js, комментарии к коду'}
              path={'/sort/mergesort'}
              back={'/'}/>
          </Col>
      </Row>
    </div>
  )
}

export default SortMain;