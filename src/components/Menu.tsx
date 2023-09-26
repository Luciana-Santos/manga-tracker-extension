import dashboard from '/img/dashboard.svg'
import marcador from '/img/marcador.svg'
import erro from '/img/erro.svg'

function Menu() {
  return (
    <ul className="grid text-blue-100">
      <li className="hover:bg-blue-600 px-2.5 rounded-md py-2 hover:text-white">
        <a href="/" className="flex gap-2 max-w-full items-center">
          <img src={dashboard} alt="" className="max-w-full h-4 w-4" />
          Dashboard
        </a>
      </li>
      <li className="flex gap-2  items-center hover:bg-blue-600 cursor-pointer px-2.5 rounded-md py-2 hover:text-white">
        <img src={marcador} alt="" className="max-w-full h-4 w-4" />
        Adicionar leitura
      </li>
      <li className="flex gap-2 items-center hover:bg-blue-600 cursor-pointer px-2.5 rounded-md py-2 hover:text-white">
        <img src={erro} alt="" className="max-w-full h-4 w-4" />
        Relatar erro
      </li>
    </ul>
  )
}
export default Menu
