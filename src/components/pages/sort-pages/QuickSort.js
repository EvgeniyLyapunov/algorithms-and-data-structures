import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import '../../../../node_modules/highlight.js/styles/devibeans.min.css';

import './quick-sort.scss';

const QuickSort = () => {
  return(
    <>
      <h2 className='text-center mb-3'>Быстрая сортировка</h2>
      <Tabs defaultActiveKey="descr" 
						className="mb-3">
        <Tab eventKey="descr" title="Описание">
          <p>
            <b>Быстрая сортировка, сортировка Хоара</b> (англ. <i>quicksort</i>), часто называемая <b><i>qsort</i></b> (по&nbsp;имени в&nbsp;стандартной библиотеке языка Си)&nbsp;&mdash; алгоритм сортировки, разработанный английским информатиком Тони Хоаром во&nbsp;время своей работы в&nbsp;МГУ в&nbsp;1960&nbsp;году.
          </p>
          <p>
            Общая идея алгоритма состоит в&nbsp;следующем:
          </p>
          <ul>
            <li>
              Выбрать из&nbsp;массива элемент, называемый опорным. Это может быть любой из&nbsp;элементов массива. От&nbsp;выбора опорного элемента не&nbsp;зависит корректность алгоритма, но&nbsp;в&nbsp;отдельных случаях может сильно зависеть его эффективность
            </li>
            <li>
              Сравнить все остальные элементы с&nbsp;опорным и&nbsp;переставить их&nbsp;в&nbsp;массиве так, чтобы разбить массив на&nbsp;три непрерывных отрезка, следующих друг за&nbsp;другом: &laquo;элементы меньшие опорного&raquo;, опорный элемент, и&nbsp;&laquo;равные и&nbsp;большие&raquo;.
            </li>
            <li>
              Для отрезков &laquo;меньших&raquo; и&nbsp;&laquo;больших&raquo; значений выполнить рекурсивно ту&nbsp;же последовательность операций, если длина отрезка больше единицы.
            </li>
          </ul>
          <p>
            <b>Оценка сложности алгоритма:</b>
          </p>
          <p>
            Лучший случай, среднее: <b><i>O(n*log*n)</i></b>
          </p>
          <p>
            Худший случай: <b><i>O(n<sup>2</sup>)</i></b>
          </p>
          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>
        <Tab eventKey="code" title="JavaScript">
          <Highlight className='javascript'>
            {`function quickSort(arr) {
  if(arr.length < 2) {
    return arr;
  }

  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  let less = [];
  let greater = [];

  for (let i = 0; i < arr.length; i++) {

    if (i === pivotIndex) continue;

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}`}
          </Highlight>
          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>
        <Tab eventKey="investigation" title="Код с комментариями">
          <Highlight className='javascript'>
            {`// функция принимает аргументом сортируемый массив
// возвращает новый, отсортированный по возрастанию
// не мутирует исходный массив
function quickSort(arr) {

  // базовый случай рекурсии
  if(arr.length < 2) {
    return arr;
  }

  // для оптимизации скорости, опорный элемент выбираеся случайно
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  // массивы для элементов больших или меньших опорного
  let less = [];
  let greater = [];

  // цикл для прохода по массиву и сортировки элементов
  for (let i = 0; i < arr.length; i++) {

    // если индекс опорного, то операция пропускается
    if (i === pivotIndex) continue;

    // если элемент меньше опорного, то в левую часть (массив less)
    if (arr[i] < pivot) {
      less.push(arr[i]);

      // если элемент равен или больше опорного, то в правую (массив greater)
    } else {
      greater.push(arr[i]);
    }
  }

  // возвращается массив, внутри которого разворачиваются рекурсивный вызов левой части, опорного элемента
  // и правой части входящего массива
  return [...quickSort(less), pivot, ...quickSort(greater)];
}`}
          </Highlight>
          <Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
        </Tab>
      </Tabs>
    </>
  )
}

export default QuickSort;