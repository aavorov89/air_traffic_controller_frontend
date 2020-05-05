import { RECEIVE_API_DATA, UPDATE_STATUS } from '../actions';

export default (state = {}, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return data;
    case UPDATE_STATUS:
      const { id, status } = data;

      let newState = [...state];
      const index = newState.findIndex((plane) => plane.id === id);
      newState[index].status = status;

      return newState;
    default:
      return state;
  }
};