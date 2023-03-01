function NavMenu() {
  return (
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
  );
}

export default NavMenu;