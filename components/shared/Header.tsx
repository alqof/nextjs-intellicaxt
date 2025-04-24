import React from 'react'

const Header = ({ title, subtitle }: { title: string | undefined, subtitle?: string | undefined }) => {
    return (
        <>
            {title ? (
                <h2 className="h2-bold text-dark-600">{title}</h2>
            ) : (
                <h2 className="h2-bold text-dark-600">Untitled</h2>
            )}
            {subtitle && <p className="p-16-regular mt-4">{subtitle}</p>}
        </>
    )
}
export default Header