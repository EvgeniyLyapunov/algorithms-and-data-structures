import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight';
import '../../../../node_modules/highlight.js/styles/devibeans.min.css';

import './merge-sort.scss';

const MergeSort = () => {
	return (
		<>
			<h2 className='text-center mb-3'>Сортировка слиянием</h2>
			<Tabs defaultActiveKey="descr" 
						className="mb-3">
				<Tab eventKey="descr" title="Описание">
					<p>
						<b>Сортировка слиянием</b> (<i>Merge sort</i>)&nbsp;&mdash; алгоритм сортировки массива, который реализован по&nbsp;принципу &laquo;разделяй и&nbsp;властвуй&raquo;. Задача сортировки массива разбивается на&nbsp;несколько подзадач сортировки массивов меньшего размера, после выполнения которых, результат комбинируется, что и&nbsp;приводит к&nbsp;решению начальной задачи.
					</p>
					<p>
						Алгоритм сортировки слиянием выглядит следующим образом:
					</p>
					<ul>
						<li>
							Входной массив разбивается на&nbsp;две части одинакового размера;
						</li>
						<li>
							Каждый из&nbsp;подмассивов сортируется отдельно, по&nbsp;этому&nbsp;же принципу, тоесть производится повторное разбитие до&nbsp;тех пор, пока длина подмассива не&nbsp;достигнет единицы. В&nbsp;таком случае каждый единичный массив считается отсортированным;
						</li>
						<li>
							После этого осуществляется слияние всех подмассивов в&nbsp;один, в&nbsp;результате чего получаем отсортированные данные.
						</li>
					</ul>
					<p>
						Автор:	<b>Джон фон Нейман</b>
					</p>
					<p>
						Скорость работы: Худшее, среднее, лучшее время: O(nlogn)
					</p>
					<p>
						Затраты памяти: O(n)
					</p>
					<Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
				</Tab>
				<Tab eventKey="code" title="JavaScript">
					<Highlight className='javascript'>
					{`function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  return merging(mergeSort(left), mergeSort(right));
}

function merging(left, right) {
  const res = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }

  return res;
}`}
					</Highlight>
					<Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
				</Tab>
				<Tab eventKey="investigation" title="Код с комментариями">
					<Highlight className='javascript'>
						{`// функция аргументом принимает сортируемый массив
function mergeSort(arr) {
  // базовый случай рекурсии
  if (arr.length < 2) {
    return arr;
  }

  // индекс серединного элемента массива
  const middle = Math.floor(arr.length / 2);

  // разделение массива на две половины
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  // здесь вызов функции слияния двух отсортированных массивов
  // в качестве параметров - двух отсортированных массивов -
  // передаются рекурсивные вызовы функции деления массива на две части
  return merging(mergeSort(left), mergeSort(right));
}

// функция слияния двух отсортированных массивов
// аргументы - два отсортированных массива
function merging(left, right) {
  // пустой массив, куда будет происходить слияние
  const res = [];

  // условие продолжения цикла - обязательное наличие элементов в обоих массивах
  while (left.length && right.length) {
    // находится наименьший элемент из двух первых элементов двух массивов
    if (left[0] < right[0]) {
      // в результирующий массив записывается результат сравнения с мутацией массива-источника
      // таким образом в определённый момент в одном из массивов будет ноль элементов
      // и цикл прервётся
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  // из двух циклов ниже запустится тот который примет на вход не пустой массив,
  // т.е. тот, в котором остались элементы после основного цикла
  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }

  // функция возвращает отсортированный массив, собранный из двух входящих
  return res;
}
`}
					</Highlight>
					<Link className='my-3 btn btn-outline-primary' to={'/sort'}>Назад</Link>
				</Tab>
			</Tabs>
		</>
	)
}

export default MergeSort;