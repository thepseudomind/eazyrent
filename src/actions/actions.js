import { PAGEROUTE, CHANGEFORM, ADDTOBANK, RESETALERTBOX, DELETEBANK, EDITBANK, RETRIEVESTATE, OVERWRITEBANK } from '../constants/constants';

export const changePageRoute = (route)=>({
    type: PAGEROUTE,
    payload: route
});

export const changeForm = (form) => ({
    type: CHANGEFORM,
    payload: form 
})

export const addToBank = (bank) => ({
    type: ADDTOBANK,
    payload: bank
});

export const deleteBank = (bank) => ({
    type: DELETEBANK,
    payload: bank    
});

export const editBank = (id) => ({
    type: EDITBANK,
    payload: id 
});

export const overwriteBank = (bank) => ({
    type: OVERWRITEBANK,
    payload: bank
});

export const resetAlertBox = ()=> ({
    type: RESETALERTBOX,
    payload: ''
});

export const retrieveState = (state) => ({
    type: RETRIEVESTATE,
    payload: state
})
