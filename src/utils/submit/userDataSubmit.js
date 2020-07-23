//import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function userDataSubmit(values) {
    return sleep(1000).then(() => {
        console.log(values);
    });
}

export default userDataSubmit;