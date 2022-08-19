import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Checkbox,
  } from "@material-tailwind/react";
import { Icon } from '@iconify/react';

const PackageCard = ({ type, active}) => {
    return ( 
    <Card className="flex items-center w-full lg:w-1/3 bg-transparent shadow-none lg:mx-10">
      <CardHeader
        floated={false}
        variant="filled"
        className="flex flex-col items-center justify-center bg-secondary rounded-lg lg:w-full lg:h-44"
      >
        { type == 'Basic'
         ? <Icon icon="ic:baseline-workspace-premium" height="24"/>
         : type == 'Standard' 
         ?(
            <div className="flex">
                <Icon icon="ic:baseline-workspace-premium" height="24"/>
                <Icon icon="ic:baseline-workspace-premium" height="24"/>
            </div>
        ) 
        : type == 'Premium' 
        ? (
            <div className="flex">
                <Icon icon="ic:baseline-workspace-premium" height="24"/>
                <Icon icon="ic:baseline-workspace-premium" height="24"/>
                <Icon icon="ic:baseline-workspace-premium" height="24"/>
            </div>
        ): "mm"}
        <Typography variant="h4" color="white" >
          {type}
        </Typography>
      </CardHeader>
      {active != 'active' && <Icon icon="ant-design:caret-down-outlined" height="54" color="#0A4425" className="lg:-my-4 z-40" />}
      <CardBody className="flex flex-col text-center">
        <Typography variant="lead" color="white" className="lg:my-2">
          10 SOL
        </Typography>
        <Typography variant="lead" color="white" className="lg:my-2">
          250000 TKN
        </Typography>
        <Typography variant="lead" color="white" className="lg:my-2">
          24%
        </Typography>
      </CardBody>
    </Card>
     );
}
 
export default PackageCard;