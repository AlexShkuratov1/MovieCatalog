import { NavLink, Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <><nav class="navbar bg-secondary">
      <div class="container-fluid">
        <NavLink to="/"><h3 class="navbar-brand">Movie Catalog</h3></NavLink>
        <NavLink to="search"><h3 class="navbar-brand">Search</h3></NavLink>
      </div>
    </nav>
      <main className="container">
        <Outlet />
      </main>

      </>
  )
}
export {Layout}
