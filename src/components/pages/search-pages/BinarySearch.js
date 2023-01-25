import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
// import '../../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css';
import '../../../../node_modules/highlight.js/styles/devibeans.min.css';


const BinarySearch = () => {

  return(
    <>
      <h2 className='text-center mb-3'>Бинарный поиск</h2>
      <Tabs
        defaultActiveKey="descr"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="descr" title="Описание">
          <p>
            Бинарный, или двоичный поиск осуществляется на отсортированном массиве.
          </p>
          <p>
            Задача - вернуть индекс найденного элемента или -1, если такого элемента в массиве нет.
          </p>
          <p>
            Алгоритмическая сложность - O(log n);
          </p>
          <p>
            Описание алгоритма:
          </p>
          <ul>
            <li>
              Поиск начинается с середины массива. 
            </li>
            <li>
              Элемент из середины сравнивается с заданным.
            </li>
            <li>
              Если элементы равны, поиск прекращается и возвращается индекс этого элемента.
            </li>
            <li>
              Если не равны, то определяется, в какой половине массива продолжать поиск.
            </li>
            <li>
              Если искомый элемент больше, чем элемент, взятый из середины, то следующий шаг поиска осуществляется в правой части массива, а если меньше, то в левой.
            </li>
            <li>
              Из полученной половины массива так же выбирается элемент из середины и сравнивается с заданным.
            </li>
            <li>
              Поиск заканчивается, когда размер половины массива на очередном шаге будет равняться 1, или элемент будет найден ранее.
            </li>
          </ul>
          <Link className='my-3 btn btn-outline-primary' to={'/search'}>Назад</Link>
        </Tab>
        <Tab eventKey="code" title="JavaScript">
        <Highlight className='javascript'>
        {`function binarySearch(arr, n) {
    let right = arr.length - 1;
    let left = 0;
    let middle = Math.floor((right + left) / 2);
    let index = -1;

    while(left <= right && index === -1) {
      if(arr[middle] === n) {
        index = middle;
      } else if(arr[middle] > n) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
      middle = Math.floor((right + left) / 2);
    }
    
    return index;
  }`}
        </Highlight>
        <Link className='my-3 btn btn-outline-primary' to={'/search'}>Назад</Link>
        </Tab>
        <Tab eventKey="investigation" title="Код с комментариями">
          <Highlight className='javascript'>
            {`// аргументы:
  // arr - отсортированный массив, в котором осуществляется поиск,
  //  n - элемент, который нужно найти
  function binarySearch(arr, n) {

    // left и right - индексы начала и конца части массива, в которой на конкретном шаге осуществляется поиск,
    // на старте это начало и конец всего массива
    let right = arr.length - 1; 
    let left = 0;

    // middle - индекс элемента из середины,
    // вычисляется как среднее арифметическое суммы индексов начала и конца
    let middle = Math.floor((right + left) / 2);

    //  в index запишется индекс элемента, равного искомому,
    // если заданного элемента в массиве нет,
    // функция вернёт значение index по умолчанию.
    let index = -1;

    // цикл поиска будет работать пока индекс начального элемента меньше или равен индексу последнего элемента
    // и значение index равно значению по умолчанию, т.е. -1
    // важно, что именно логическое 'и', а не 'или'
    while(left <= right && index === -1) {
      
      // условие, при котором изменяется index, и цикл завершает работу
      if(arr[middle] === n) {
        index = middle;

        // если элемент не найден, определяется в какой части массива будет продолжен поиск на следующем шаге
        // если элемент из середины больше заданного, отбрасывается правая часть массива
        // в right записывается новый конечный индекс 
      } else if(arr[middle] > n) {
        right = middle - 1;

        // если элемент из середины меньше заданного, отбрасывается левая часть массива
        // в left записывается новый начальный индекс 
      } else {
        left = middle + 1;
      }

      // на основании новых значений left или right расчитывается индекс элемента из середины получившейся части массива
      middle = Math.floor((right + left) / 2);
    }

    // при завершении цикла поска index либо изменит значение по умолчанию, это значит, что элемент найден,
    // если заданного элемента в массиве нет, функция вернёт значение index по умолчанию, т.е. -1
    return index;
  }`}
          </Highlight>
          <Link className='my-3 btn btn-outline-primary' to={'/search'}>Назад</Link>
        </Tab>
      </Tabs>
    </>
  )
}

export default BinarySearch;