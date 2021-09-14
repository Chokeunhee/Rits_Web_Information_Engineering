const Nav = () => {
    return (
        <nav className="navbar">
            <h3 className="studentinfo">Cho Keunhee 26001904131</h3>
            <h1>Lets Post!</h1>
            <div className="links">
                <a className = "link" href="/">Our Posts</a>
                <span>||</span>
                <a className = "link" href="/newPost">Add new post</a>
                <span>||</span>
                <a className = "link" href="/page3">Credits</a>
            </div>
            
        </nav>
    );
}

export default Nav;
