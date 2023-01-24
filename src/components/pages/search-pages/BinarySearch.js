import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



import Highlight from 'react-highlight';
import '../../../../node_modules/highlight.js/styles/atom-one-dark-reasonable.css';


const BinarySearch = () => {

  return(
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      <Highlight className='javascript'>
      {`const array = [1, 3, 5, 7, 8, 10, 13, 20, 27, 36, 45, 50];

function binarySearch(arr, n) {
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
      </Tab>
      <Tab eventKey="profile" title="Profile">
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
    </Tabs>
  )
}

export default BinarySearch;