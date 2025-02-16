import { ValidationConstants } from "./validationConstants"

export const taskSubmissionCheck = (amount: string,category:string, date: Date| null,des: string) => {
    if (!amount) {
        return ValidationConstants.emptyAmmount;
    }
    else if (!category) {
        return ValidationConstants.emptyCategory;
    } else if (!date) {
        return ValidationConstants.emptyDate;
    } else if (!des) {
        return ValidationConstants.emptyDes;
    }
    else '';
}