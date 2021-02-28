import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/app/';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     };
//     this.nextYear = () => {
//       this.setState(state => ({
//         years: ++state.years
//       }));
//     };
//     this.prevYear = () => {
//       this.setState(state => ({
//         years: --state.years
//       }));
//     };
//   }

//   render() {
//     const {name, sername, link} = this.props,
//       {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear} >+</button>
//         <button onClick={this.prevYear} >-</button>
//         <h1>My name is {name} {sername} years = {years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name="Jhon" sername="Doe" link="http://vk.com" />
//       <WhoAmI name="Jhon2" sername="Doe2" link="http://vk.com" />
//       <WhoAmI name="Jhon3" sername="Doe3" link="http://vk.com" />
//     </>
//   )
// }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
