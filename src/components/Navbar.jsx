import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            'resize',
            () =>{
                window.innerWidth >= 960 && setOpenNav(false);
            })
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md lg:text-lg text-white"
            >
                <a href='#'>Home</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md lg:text-lg text-white"
            >
                <a href='#'>About</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md lg:text-lg text-white"
            >
                <a href='#'>Services</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md lg:text-lg text-white"
            >
                <a href='#'>Portifolio</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md lg:text-lg text-white"
            >
                <a href='#'>Blog</a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal text-md lg:text-lg text-white"
            >
                <a href='#'>Contact</a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto bg-primary lg:border-none rounded-none lg:rounded-none lg:rounded-b-md max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4 sticky top-0 z-40">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="mr-4 lg:mr-48 lg:ml-8 cursor-pointer py-1.5 font-bold text-white text-md lg:text-2xl"
                >
                    <span>Farmers Dao</span>
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button variant="filled" size="lg" color="green" className="hidden lg:inline-block bg-gradient-to-b from-buto to-primary lg:rounded-full">
                    <Link to='/Join'>Join organization</Link>
                </Button>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="white"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="white"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="filled" size="sm" fullWidth color="green" className="mb-2 bg-gradient-to-b from-primary to-buto">
                    <span className="">Join organization</span>
                </Button>
            </MobileNav>
        </Navbar>
    )
}
export default Nav
