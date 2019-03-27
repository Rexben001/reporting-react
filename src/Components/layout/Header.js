import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { branding } = props;
    return (
        <div className="nav navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><Link to="/reports/create" className="nav-link"> Create Report</Link></li>
                        <li className="nav-item"><Link to="/reports" className="nav-link"> Show Reports</Link></li>
                        <li className="nav-item"><Link to="/signup" className="nav-link"> Sign Up</Link></li>
                        <li className="nav-item"><Link to="/signin" className="nav-link"> Sign In</Link></li>
                        <li className="nav-item"><Link to="/profile" className="nav-link"> My Profile</Link></li>

                    </ul>
                </div>
            </div>
        </div>

    )
}

Header.defaultProps = {
    branding: 'Reports Collector'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}
export default Header;