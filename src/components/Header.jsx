import logo from '../assets/logo.svg'
const Header = ({score}) => {

    return (
       <header>
            <img src={logo} alt="logo" />
            <div>
                <p>score</p>
                <p>{score}</p>
            </div>
       </header>
    );
}

export default Header;
