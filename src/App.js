import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App container m-1 mt-5">
      <p className='display-1' data-bs-theme="dark">Hi, I'm Bea</p>
      <p className='display-6'>A Front-End developer</p>
      <p>This is currently under development, but you can check my latest project <span><a href="https://getchup.ca" target="_blank" className="link-underline link-underline-opacity-0 link-info">here</a></span></p>
      <p>You can also check my <a href="https://www.linkedin.com/in/beatrizdoneux/" className="link-underline link-underline-opacity-0 link-info">LinkedIn</a> or <a href="mailto:beatrizdoneux@outlook.com" className="link-underline link-underline-opacity-0 link-info">send me an email</a></p>
      <p>Thank you!</p>
    </div>
  );
}

export default App;
