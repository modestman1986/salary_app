import "./styles/global.css";
import { FaAngellist } from "react-icons/fa";
import Button from "./components/Button.jsx";

function App() {

  return (
    <div className="App dark:format-invert h-screen">
      <header className="App-header bg bg-indigo-500 flex justify-between h-[10%] items-center">
        <div className="flex justify-center items-center">
          <img src="./logo192.png" className="h-11 m-2"></img>
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
      <main className="h-4/5">
          <div className="left w-1/5 bg-indigo-300 flex justify-center items-start h-full">
            <div className="menu w-full h-full">
              <ul className="text-center text-xl">
                <li className="p-3 hover:bg-indigo-700 hover:text-blue-50 hover:scale-x-125 hover:scale-y-125 hover:rounded-r-lg cursor-pointer">
                  <a>Liste des salariés</a>
                </li>
                <li className="p-3 hover:bg-indigo-700 hover:text-blue-50 hover:scale-x-125 hover:scale-y-125 hover:rounded-r-lg cursor-pointer">
                  <a>Congés</a>
                </li>
                <li className="p-3 hover:bg-indigo-700 hover:text-blue-50 hover:scale-x-125 hover:scale-y-125 hover:rounded-r-lg cursor-pointer">
                  <a>Absences</a>
                </li>
                <li className="p-3 hover:bg-indigo-700 hover:text-blue-50 hover:scale-x-125 hover:scale-y-125 hover:rounded-r-lg cursor-pointer">
                  <a>Contrats</a>
                </li>
                <li className="p-3 hover:bg-indigo-700 hover:text-blue-50 hover:scale-x-125 hover:scale-y-125 hover:rounded-r-lg cursor-pointer">
                  <a>Planings</a>
                </li>
              </ul>
            </div>
          </div>
      </main>
      <footer className="h-[10%]  bg-indigo-400 text-xl font-bold flex justify-center items-center flex-col">
        <p>Développé par Sofiane &copy; Tous droits réservés</p>
        <p>Association des musulmans d'Aubervilliers</p>
      </footer>
    </div>
  );
}

export default App;
