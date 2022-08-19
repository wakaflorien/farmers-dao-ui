import { Icon } from '@iconify/react';
import { Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom';
import PackageCard from '../components/PackageCard';

const Package = () => {
    return (
        <main className="bg-primary h-screen w-full lg:h-screen text-white px-4 lg:px-40 lg:py-32">
            <Typography variant="h1" className="text-3xl text-center lg:my-8">
                Available packages
            </Typography>
            <div className="flex flex-row">
                <div className="lg:w-1/3">
                <Typography variant="lead" className="text-center text-tertiary font-bold lg:mt-64">
                    Price
                </Typography>
                <Typography variant="lead" className="text-center text-tertiary font-bold lg:py-4">
                    Tokens
                </Typography>
                <Typography variant="lead" className="text-center text-tertiary font-bold">
                    Packages
                </Typography>
                </div>
                <PackageCard type="Basic" active="inactive"/>
                <PackageCard type="Standard" active="inactive"/>
                <PackageCard type="Premium" active="inactive"/>
            </div>
           <div className="flex items-center justify-center lg:my-10">
                <Link to='/Proposal'>
                    <Button variant="filled" size="lg" color="green" className="hidden lg:inline-block bg-gradient-to-b from-buto to-primary lg:rounded-full">
                           <div className="flex flex-row">
                            <Icon icon="icon-park-solid:connect-address-one" height="18" className="lg:mx-2" color="#0A4425" />
                                <span className="lg:mr-2">Connect</span>
                           </div>
                    </Button>
                </Link>
           </div>
        </main>
    )
}
export default Package;
