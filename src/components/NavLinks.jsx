import PropTypes, { string } from 'prop-types';
const NavLinks = ({ route, textColor }) => {
    return (
        <li className={`justify-center text-center text-[${textColor ? textColor : "#d5daf0"}]`}><a href={route.path}>{route.name}</a></li>
    )
}
NavLinks.propTypes = {
    route: PropTypes.object,
    textColor: string
}
export default NavLinks