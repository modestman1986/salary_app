import Button from "./Button";

function Header() {
  return (
    <header className="App-header bg bg-indigo-500 flex justify-between h-[10%] items-center">
      <div className="flex justify-center items-center">
        <img src="./logo192.png" className="h-11 m-2"></img>
        <h1>
          <a href="index.html" className="text-2xl text-white font-bold">
            Salary<span className="text-3xl">@</span>pp
          </a>
        </h1>
      </div>
      <nav>
        <Button href="https://fr.reactjs.org/docs/getting-started.html">
          Doc React
        </Button>
        <Button href="https://tailwindcss.com/">Doc Tailwind</Button>
        <Button href="https://developer.mozilla.org/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks">
          Doc JavaScript
        </Button>
        <Button href="https://www.php.net/manual/fr/">Doc PHP</Button>
      </nav>
    </header>
  );
}

export default Header;
