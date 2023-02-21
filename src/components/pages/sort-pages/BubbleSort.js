import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
// import '../../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css';
import '../../../../node_modules/highlight.js/styles/devibeans.min.css';

const BubbleSort = () => {
  return(
    <>
      <h2 className='text-center mb-3'>Сортировка пузырьком</h2>
      <Tabs defaultActiveKey="descr" 
            className="mb-3">
        <Tab eventKey="descr" title="Описание">
          <p>
            Сортиро́вка простыми обменами, сортировка пузырько́м
          </p>
          <p>
            Сложность алгоритма: O(n<sup>2</sup>)
          </p>
          <p>
          Алгоритм состоит из повторяющихся проходов по сортируемому массиву. За каждый проход элементы последовательно сравниваются попарно и, если порядок в паре неверный, выполняется перестановка элементов. Проходы по массиву повторяются N-1 раз или до тех пор, пока на очередном проходе не окажется, что обмены больше не нужны, что означает — массив отсортирован. При каждом проходе алгоритма по внутреннему циклу очередной наибольший элемент массива ставится на своё место в конце массива рядом с предыдущим «наибольшим элементом», а наименьший элемент перемещается на одну позицию к началу массива («всплывает» до нужной позиции, как пузырёк в воде — отсюда и название алгоритма).
          </p>
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
          <Highlight className='javascript'>
            {`// функция аргументом принимает сортируемый массив
function bubbleSort(arr) {

  // внешний цикл проходит по всем элементам массива кроме первого,
  // проход начинается с конца, т.к. счётчик этого цикла
  // является ограничением для внутреннего цикла,
  // т.е. каждую итерацию внешнего цикла, внутренний проходит на 
  //один элемент с конца меньше, т.к. там уже отсортированные элементы
  for (let i = arr.length - 1; i > 0; i--) {

    // внутренний цикл проходит с начала массива по всем элементам 
    // кроме последнего
    for (let j = 0; j < i; j++) {

      // на каждой итерации сравниваются два элемента
      // если левый больше правого, они меняются местами
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}
`}
          </Highlight>
          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>

      </Tabs>
    </>
  )
}

export default BubbleSort;

