"use client";

import AccountForm from "./forms/AccountForm";
import AddressForm from "./forms/AddressForm";
import UserForm from "./forms/UserForm";
import Button from "./UI/Button";
import { useMultiStepForm } from "./useMultiStepForm";

const Form = () => {

    const {steps, currentStepIndex, step, next, back} = useMultiStepForm([
        <UserForm/>,
        <AddressForm/>,
        <AccountForm/>
    ]);

    return (
        <div className="relative bg-white rounded-xl shadow-xl px-8 py-8 m-auto my-6 w-[40%] border border-black border-solid">
            <div className="m-auto">
                <div className="absolute top-2 right-2">
                    {currentStepIndex + 1} / {steps.length}
                </div>
                {step}
                <div className="flex justify-end gap-5">
                    {currentStepIndex !=0 && <Button onClick={back}>Back</Button>}
                    {currentStepIndex != steps.length - 1 && <Button onClick={next}>Next</Button>}
                </div>
            </div>
        </div>
        
    )
}

export default Form;