import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg';
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { useContext } from "react";
import { UserContext } from "../../../contexts/user.context.js";
import { CartContext } from "../../../contexts/cart.context.jsx";
import { signOutUser } from "../../../utils/firebase/firebase.utils.js";
import CartIcon from "../../../components/car-icon/car-icon.component.jsx";
import CartDropdown from "../../../components/cart-dropdown/cart-dropdown.component.jsx";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);


  return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo'/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                SHOP
                </NavLink>
                {currentUser ? (
                    <NavLink as= 'span' onClick={signOutUser}>SIGN OUT</NavLink>)
                : (<NavLink to='/auth'>
                SIGN IN
                </NavLink>)}
                <CartIcon />
            </NavLinks>
            {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  );
}; export default Navigation;