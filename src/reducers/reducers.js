import { PAGEROUTE } from "../constants/constants";

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