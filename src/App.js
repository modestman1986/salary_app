import "./styles/global.css";
import { FaAngellist } from "react-icons/fa";
import Button from "./components/Button.jsx";

function App() {

  return (
    <div className="App dark:format-invert">
      <header className="App-header bg bg-indigo-500 flex justify-between">
        <div className="flex justify-center items-center">
          <img src="./logo192.png" className="h-10 m-2"></img>
          <h1><a href="index.html" className="text-2xl text-white font-bold">Salary<span className="text-3xl">@</span>pp</a></h1>
        </div>
        <nav>
          <Button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doc React
            </a>
          </Button>
          <Button>
            <a
              className="App-link"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doc Tailwind
            </a>
          </Button>
          <Button>
            <a
              className="App-link"
              href="https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doc JavaScript
            </a>
          </Button>
          <Button>
            <a
              className="App-link"
              href="https://www.php.net/manual/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Doc PHP
            </a>
          </Button>
        </nav>
      </header>
    </div>
  );
}

export default App;
