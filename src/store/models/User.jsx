import userService from "../../services/userService";

const initialUserState = {
  collection: [],
  collection2: [],
  isLoadingUser: false,
  isSavingUser: false,
};

const user = {
  state: initialUserState,
  reducers: {
    setUsersReducer(state, users) {
      return { ...state, collection: users };
    },
    addUserReducer(state, newUser) {
      return { ...state, collection: [...state.collection, newUser] };
    },
    setLoadingUserReducer(state, isLoadingUser) {
      return { ...state, isLoadingUser };
    },
    setSavingUserReducer(state, isSavingUser) {
      return { ...state, isSavingUser };
    },
    addUser2Reducer(state, newUser) {
      return { ...state, collection2: [...state.collection2, newUser] };
    },
  },
  effects: dispatch => ({
    async fetchUsers() {
      dispatch.user.setLoadingUserReducer(true);
      const userList = await userService.fetchUsers();
      dispatch.user.setUsersReducer(userList);
      dispatch.user.setLoadingUserReducer(false);
    },
    async createUser({ fio , to ,from , cause }, rootState) {
      dispatch.user.setSavingUserReducer(true);
      let data = await userService.createUser({
        fio: `${fio}`,
        to,
        from,
        cause
      });
      console.log(data);
      dispatch.user.addUserReducer(data);
      dispatch.user.setSavingUserReducer(false);
    },
    async User({ fio2 }) {
      dispatch.user.setSavingUserReducer(true);
      let data = await userService.User({
        fio2: `${fio2}`,
      });
      console.log(data);
      dispatch.user.addUser2Reducer(data);
      dispatch.user.setSavingUserReducer(false);
    },
    
  }),
};

export default user;
