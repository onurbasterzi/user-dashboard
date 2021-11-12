import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/"> User DashBoard</Link>
        </div>
        <div className="links">
          <Link href="/">List</Link>
          <Link href="/home-dt">List DT</Link>
          <Link href="/users/new-user">+ New User</Link>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;
