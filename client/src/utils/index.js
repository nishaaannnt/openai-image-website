import { surpriseMePrompts } from '../constant';

export const surpriseMe=(prompt)=>{
    const randomIn=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[randomIn];
    if(prompt===randomPrompt) surpriseMe(randomPrompt);
    return randomPrompt;
}