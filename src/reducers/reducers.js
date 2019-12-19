import { PAGEROUTE, ADDTOBANK, CHANGEFORM, RESETALERTBOX, RETRIEVESTATE, EDITBANK, OVERWRITEBANK, DELETEBANK } from "../constants/constants";
import { Bank } from '../types/types';

const initialRoute = {
    route: 'listing'
}

export const routeReducer = (state = initialRoute, action = {}) =>{
    switch (action.type) {
        case PAGEROUTE:
            return {...state, route: action.payload}
    
        default:
            return state;
    }
}


const initialBanks = {
    form : '',
    alert : '',
    banks: [], // new Bank('Sterling Bank', '2357810094', 'current', '256092341625', 'verified')
    bankToEdit: ''
}

export const bankReducers = (state = initialBanks, action={}) =>{
    switch (action.type) {
        case RETRIEVESTATE: 
            return {...state, ...action.payload};
            
        case ADDTOBANK:
            //If bank is already in list
            for (const bank of state.banks) {
                if(bank.account === action.payload.account){
                    console.log('Bank already added');
                    return {...state, alert: 'Bank already added'};
                }
            }

            //Only allow 3 banks to be added at a given time
            if(state.banks.length >= 3){
                console.log('You cannot add any more banks');
                return {...state, alert: 'Maximum of 3 banks allowed'};
            }else{
                localStorage.setItem('bank', JSON.stringify({...state, form: '', banks: [...state.banks, action.payload]})); //Persisting bank changes in localstorage
                return {...state, banks: [...state.banks, action.payload]};
            }

        case EDITBANK: 
            for (const bank of state.banks) {
                if(bank.id === parseInt(action.payload)){
                    return {...state, bankToEdit: bank};
                }
            }
            return state;

        case OVERWRITEBANK:
            let newBanks;
            for (const bank of state.banks) {
                if(bank.id === parseInt(action.payload.id)){
                    const indexToChange = state.banks.indexOf(bank);
                    state.banks.splice(indexToChange, 1, action.payload);
                    newBanks = state.banks;
                }
            }
            localStorage.setItem('bank', JSON.stringify({...state, form: '', banks: newBanks})); //Persisting bank changes in localstorage
            return {...state, alert: 'Bank details changed', banks: newBanks};

        case DELETEBANK:
                let remainingBanks;
                for (const bank of state.banks) {
                    if(bank.id === parseInt(action.payload)){
                        const indexToDelete = state.banks.indexOf(bank);
                        state.banks.splice(indexToDelete, 1);
                        remainingBanks = state.banks;
                    }
                }
                localStorage.setItem('bank', JSON.stringify({...state, form: '', banks: remainingBanks})); //Persisting bank changes in localstorage
                return {...state, alert: 'Bank deleted', banks: remainingBanks};

        case RESETALERTBOX:
                return {...state, alert: action.payload};

        case CHANGEFORM:
            return {...state, form: action.payload};
    
        default:
            return state;
    }
}
