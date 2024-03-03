// Selectors
export const getAllTables = ({ tables }) => tables;

// Actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE-TABLES');

// Actions creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
  .then(res => res.json())
  .then(tables => dispatch(updateTables(tables)));
  }
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      console.log(action.payload, 'check the action payload');
      return [...action.payload]
    default:
      return statePart;
  };
};

export default tablesReducer;