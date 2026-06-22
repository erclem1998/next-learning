export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <span>Home</span>
            <div className="flex flex-1"></div>
            <a href="/about" className="mr-2">About</a>
            <a href="/pricing" className="mr-2">Pricing</a>
            <a href="/contact" className="mr-2">Contact</a>
        </nav>
    )
}
