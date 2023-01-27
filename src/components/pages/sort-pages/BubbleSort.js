import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
// import '../../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css';
import '../../../../node_modules/highlight.js/styles/devibeans.min.css';

import './bubble-sort.scss';

const BubbleSort = () => {
  return(
    <>
      <h2 className='text-center mb-3'>Сортировка пузырьком</h2>
      <Tabs defaultActiveKey="descr" 
            className="mb-3">
        <Tab eventKey="descr" title="Описание">

          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>
        <Tab eventKey="code" title="JavaScript">
          <Highlight className='javascript'>
            {`function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}`}
          </Highlight>
          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>
        <Tab eventKey="investigation" title="Код с комментариями">
          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>

      </Tabs>
    </>
  )
}

export default BubbleSort;

