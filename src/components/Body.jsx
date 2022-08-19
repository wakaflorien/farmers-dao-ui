import {
    Typography,
    Input
} from "@material-tailwind/react";

const Body = () => {
    return (
        <div className="flex flex-col lg:my-20 mx-2 lg:mx-40">
            <Typography variant={`h1`} className={`text-md lg:text-3xl text-white text-center my-4 lg:my-10`}>Our community</Typography>
            <Input color={`green`}  label={`Address`} size={`lg`} className={`bg-secondary border-none`}/>
            <Typography variant={`small`} className={`text-sm lg:text-xl text-tertiary my-4 lg:my-2 lg:mt-10`}>J93TcyZH5bHD2qeyFThFTKhoJ4Mg3Sb4S8NcvRLqsmBZ</Typography>
            <Typography variant={`small`} className={`text-sm lg:text-xl text-tertiary my-4 lg:my-2`}>J93TcyZH5bHD2qeyFThFTKhoJ4Mg3Sb4S8NcvRLqsmBZ</Typography>
            <Typography variant={`small`} className={`text-sm lg:text-xl text-tertiary my-4 lg:my-2`}>J93TcyZH5bHD2qeyFThFTKhoJ4Mg3Sb4S8NcvRLqsmBZ</Typography>
            <Typography variant={`small`} className={`text-sm lg:text-xl text-tertiary my-4 lg:my-2`}>J93TcyZH5bHD2qeyFThFTKhoJ4Mg3Sb4S8NcvRLqsmBZ</Typography>
            <Typography variant={`small`} className={`text-sm lg:text-xl text-tertiary my-4 lg:my-2`}>J93TcyZH5bHD2qeyFThFTKhoJ4Mg3Sb4S8NcvRLqsmBZ</Typography>
        </div>
    )
}
export default Body;
