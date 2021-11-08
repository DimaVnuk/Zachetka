import React from 'react'

function NavbarLink({children}) {
    return (
        <>
            <div className="navbar-link navbar-link_font">
                {children}
            </div>
        </>
    )
}

export default NavbarLink
