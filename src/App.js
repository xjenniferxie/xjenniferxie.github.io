import './App.css';
import resume from './Jennifer_Xie_Resume_2022.pdf'

function App() {
  return (
    <div className="App">
      <div class="main-container">
       <div class="main-item">
          <p>Hey there! My portfolio is currently under construction, but you can get a preview here:</p>
          <a href="https://www.figma.com/proto/0QTh8TcDSijbdkBcbOPgOC/Jennifer-Xie-Portfolio-2022?node-id=0%3A1&viewport=1034%2C-103%2C0.18&scaling=scale-down&starting-point-node-id=1%3A2" target="_blank" rel="noreferrer">
            Jennifer Xie Portfolio Prototype
          </a>
          <p>And for your convenience, my resume:</p>
          <a href={resume} target="_blank" rel="noreferrer">Jennifer Xie Resume</a>
        </div>
      </div>
    </div>
  );
}

export default App;
