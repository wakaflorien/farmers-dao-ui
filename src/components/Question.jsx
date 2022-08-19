import { Icon } from "@iconify/react";
import { Typography, } from "@material-tailwind/react";

const Question = () => {
    return ( 
        <div className="flex flex-row lg:my-10">
            <div className="flex flex-col items-center justify-center bg-secondary lg:py-12 lg:w-1/2 lg:rounded-xl">
                <Icon icon="bi:patch-question-fill" color="#082C19" height="34" />
                <Typography variant="lead" color="white" className="text-tertiary">We want to buy hundred cows</Typography>
            </div>
            <div className="lg:mx-4">
                <form className="flex flex-col">
                    <div className="flex flex-row">
                    <input type="radio" value="agree" name="agree" className="lg:mb-8 text-secondary"/>
                    <Typography variant="lead" color="white" className="text-white font-bold lg:mx-2 lg:-my-2">Agree</Typography>
                    </div>
                    <div className="flex flex-row">
                    <input type="radio" value="agree" name="agree" className="lg:mb-8 text-secondary"/>
                    <Typography variant="lead" color="white" className="text-tertiary font-bold lg:mx-2 lg:-my-2">Disagree</Typography>
                    </div>
                    <div className="flex flex-row">
                    <input type="radio" value="agree" name="agree" className="lg:mb-8 text-secondary"/>
                    <Typography variant="lead" color="white" className="text-tertiary font-bold lg:mx-2 lg:-my-2">Abstain</Typography>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Question;