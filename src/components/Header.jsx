import logo from '/assets/logo.png';
export default function Header() {
  return (
    <header>
      <img src={logo} alt="" width={70} />
      <h1>The little shop</h1>
      <p>Shop now, pay later</p>
    </header>
  );
}
