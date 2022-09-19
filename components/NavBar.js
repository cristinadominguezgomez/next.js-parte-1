import Link from "next/link";
export default function NavBar() {
  return (
    <header>
      <h1>Mi web personal</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Portada</Link>
            <br></br>
            <Link href="/about">Sobre mi</Link>
            <br></br>
            <Link href="/photos">Mis fotos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
