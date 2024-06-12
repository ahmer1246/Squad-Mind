import { feedback } from "../Models/feedbackModel";


let feedbackEntries :feedback [] =[];
let currentId = 1 ;


export const getAllfeedback = (): feedback[] =>{
return feedbackEntries;
};


export const addFeedback = (name:string , feedback:string): feedback =>{
const newFeedback : feedback ={
    id : currentId++,
    name,
    feedback
}
feedbackEntries.push(newFeedback);
return newFeedback;
};
