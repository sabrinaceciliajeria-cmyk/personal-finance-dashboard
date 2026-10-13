type HeaderProps = {
  title: string
}

// Muestra la identidad de la aplicación y el título de la página actual.
function Header({ title }: HeaderProps) {
  return (
    <header>
      <span>Personal Finance Dashboard</span>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
