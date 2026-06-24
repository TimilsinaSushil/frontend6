const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal footer-center bg-amber-500 text-base-content pl-200 pt-3 h-[5vh]">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - Summer Web Development</p>
        </aside>
        </footer>
    )
}

export default Footer;