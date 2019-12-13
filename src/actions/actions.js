import { PAGEROUTE } from '../constants/constants';

export const changePageRoute = (route)=>({
    type: PAGEROUTE,
    payload: route
});