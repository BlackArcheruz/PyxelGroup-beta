

const Menu = () => {
    return (
        <div className="menu-wrap">
        <input type="checkbox" className="toggler"/>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
              <li><a href="/contact">Contact</a></li>
                <li><a href="/why-us">Why Us</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">Home</a></li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Menu
