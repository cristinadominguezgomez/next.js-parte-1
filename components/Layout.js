import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <main>
      {/* <NavBar /> */}
      <hr />
      {children}
      <hr />
      <footer> (c)Cristina Dominguez 2022</footer>
    </main>
  );
}
