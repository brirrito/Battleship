import _ from 'lodash';
import './style.css';

function component() {
  elementinnerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  return element;
}

document.body.appendChild(component());