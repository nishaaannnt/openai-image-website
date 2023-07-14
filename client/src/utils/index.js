import { surpriseMePrompts } from '../constant';
import FileSaver from 'file-saver';

export const surpriseMe=(prompt)=>{
    const randomIn=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[randomIn];
    if(prompt===randomPrompt) surpriseMe(randomPrompt);
    return randomPrompt;
}

export const downloadImage=async(_id,image)=>{
    FileSaver.saveAs(image,`download-${_id}.png`);    
}