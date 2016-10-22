import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const ACTIVE_CLASS = 'active';

const getActiveClass = (route, router) => {
    const isActive = router.isActive(route, true);
    return isActive ? ACTIVE_CLASS : '';
};

const NavLink = ({ to, children, isIndex }, { router }) => (
    <li className={getActiveClass(to, router)}>
        {isIndex ?
            <IndexLink to={to}>{children}</IndexLink> :
            <Link to={to}>{children}</Link>}
    </li>
);

NavLink.contextTypes = {
    router: PropTypes.object
};

NavLink.propTypes = {
    to: PropTypes.string,
    isIndexLink: PropTypes.bool
};

NavLink.defaultProps = {
    to: '',
    isIndexLink: false
};

export default NavLink;
