// Selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// Actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE-TABLES');
const EDIT_TABLES = createActionName('EDIT-TABLES');

// Actions creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const editTables = payload => ({ type: EDIT_TABLES, payload });

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/tables')
  .then(res => res.json())
  .then(tables => dispatch(updateTables(tables)));
  }
};

export const addTablesRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };

    fetch('http://localhost:3131/tables', options)
      .then(() => dispatch(editTables(newTable)))
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      console.log(action.payload, 'check the action payload');
      return [...action.payload]
    case EDIT_TABLES:
      return statePart.map(table => (
        table.id === action.payload.id ? { ...table, ...action.payload } : table
    ));  
    default:
      return statePart;
  };
};

export default tablesReducer;