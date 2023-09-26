import logo from '/img/logo.svg'

function Logo() {
  return (
    <div className="flex gap-2 px-2.5 items-center font-semibold">
      <img src={logo} alt="" className="max-w-full h-5 w-5" />
      <span className="text-white text-xs">Manga Tracker</span>
    </div>
  )
}
export default Logo
