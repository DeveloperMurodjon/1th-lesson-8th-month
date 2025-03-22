import Link from "next/link";

const Navbar = () => {
    return (
        <nav className=" flex mx-auto justify-center gap-5 py-5 text-2xl shadow">
            <Link href="/" ><h2> Home </h2></Link>
            <Link href="/products"> <h2>Products</h2> </Link>
        </nav>
    );
};

export default Navbar;