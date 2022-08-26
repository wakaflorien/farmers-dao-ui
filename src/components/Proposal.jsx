import { Icon } from "@iconify/react";
import { Button, Typography, Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input, } from "@material-tailwind/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Question from "./Question";

const Proposal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return ( 
        <main className="bg-primary h-screen w-full lg:h-screen px-4 lg:px-40 py-2 lg:py-4">
            <div className="flex flex-row justify-between">
                <div className="flex items-center ">
                    <Typography variant="lead" className="text-tertiary">J93TcyZH5bHD2qeyFThFTKhoJ4Mg3Sb4S8NcvRLqsmBZ</Typography>
                    <Typography variant="h4" className="lg:text-xl lg:mx-20" color="white">10 Tokens</Typography>
                </div>
                <Button variant="filled" size="lg" color="green"  onClick={handleOpen} className="hidden lg:inline-block bg-gradient-to-b from-buto to-primary lg:rounded-full">
                    <div className="flex flex-row">
                        <Icon icon="bx:message-rounded-add" height="18" className="lg:mx-2" color="#0A4425" />
                        <span className="lg:mr-2">Add proposal</span>
                    </div>
                </Button>
                <Button variant="filled" size="lg" color="green" className="hidden lg:inline-block bg-gradient-to-b from-buto to-primary lg:rounded-full">
                    <Link to='/' className="flex flex-row">
                        <Icon icon="ant-design:logout-outlined" height="18" className="lg:mx-2" color="#0A4425" />
                            <span className="lg:mr-2">Logout</span>
                    </Link>
                </Button>
            </div>
            <div className="flex flex-col lg:my-20">
                <Typography variant="h1" color="white" className="lg:text-3xl">Active proposal</Typography>
                <Question />
            </div>
                <Fragment>
                <Dialog open={open} handler={handleOpen} className="bg-transparent text-center shadow-lg">
                    <DialogHeader className="text-white lg:mx-40">Create a new proposal</DialogHeader>
                    <DialogBody>
                    <Input color={`green`}  label={`Proposal`} size={`md`} className={`bg-secondary border-none`}/>
                    </DialogBody>
                    <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="filled"className="bg-secondary hover:shadow-sm" onClick={handleOpen}>
                        <span>Submit</span>
                    </Button>
                    </DialogFooter>
                </Dialog>
            </Fragment>
        </main>
     );
}
 
export default Proposal;