import { GET_CITIES } from '../Actions/Types';

export default function getReducers(state = [], action)
{
    switch(action.type)
    {
        case GET_CITIES:
            return action.cities.photos;
        default:
            return state;
    }
}