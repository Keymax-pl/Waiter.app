import { API_URL } from "../config";

// Selectors
export const getStats = ({ status }) => status;

// Actions
const createActionName = actionName => `app/tables/${actionName}`;
const TABLES_STATS = createActionName('TABLES_STATS');

// Actions creators
export const tablesStats = payload => ({ type: TABLES_STATS , payload });

export const fetchStats = () => {
  return (dispatch) => {
    fetch(API_URL + "/status")
      .then(res => res.json())
      .then(status => dispatch(tablesStats(status)));
  };
};

const starusReducer = (statePart = [], action) => {
    switch (action.type) {
      case TABLES_STATS:
        return [...action.payload]  
      default:
        return statePart;
    };
  };
  
  export default starusReducer;