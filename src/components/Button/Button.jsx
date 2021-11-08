import React from 'react'

function Button({children,propsStyle}) {
    return (
        <>
            <div className="button" style={propsStyle}>
                {children}
            </div>
        </>
    )
}

export default Button
