const initialState = {
  sort: [],
  difficulty: [],
};

//Action Type
const UPDATESORT = 'listFiltering/UPDATESORT';
const UPDATEFILTER = 'listFiltering/UPDATEFILTER';
const RESETFILTER = 'listFiltering/RESETFILTER';
const RESETALL = 'listFiltering/RESETALL';

// Action Creator & Action
export const updateSort = sort => ({ type: UPDATESORT, sort: sort });
export const updateFilter = filter => ({ type: UPDATEFILTER, filter: filter });
export const resetFilter = () => ({ type: RESETFILTER });
export const resetAll = () => ({ type: RESETALL });

// Reducer
export default function listFiltering(state = initialState, action) {
  switch (action.type) {
    case UPDATESORT:
      return { ...state, sort: [action.sort] };
    case UPDATEFILTER:
      return { ...state, difficulty: action.filter };
    case RESETFILTER:
      return { ...state, difficulty: [] };
    case RESETALL:
      return { sort: [], difficulty: [] };
    default:
      return state;
  }
}
