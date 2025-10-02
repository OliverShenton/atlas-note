import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header id="header" role="banner" className="fixed w-full z-50">
      <div className="flex items-center justify-between p-4 max-w-[96rem] mx-auto">
        <HeaderLogo />
      </div>
    </header>
  );
};

export default Header;
