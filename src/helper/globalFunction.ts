import moment from "moment"
export const formattedDateDD_MM_YYYY = (date: Date) => moment(date).format('DD-MM-YYYY')

export const getTotalBudget = (categories: any) =>{
    let sum: number = 0;
    if (categories) {
    Object.entries(categories).map(([key, value]) => {
        console.log('in key', value);
        sum += Number(value.budget);
    })       
    }
        return sum;
}