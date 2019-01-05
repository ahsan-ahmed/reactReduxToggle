const INITIAL_STATE = {
  name1: "ahsan ahmed",flag:false
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NAME":
    state = {
      ...state,
      name1: state.flag ? INITIAL_STATE.name1 : action.payload,
      flag:!state.flag      }
      break;
    }
    console.log("new-State---->",state);
  return state
}
export default user;


// const mylogger=(store)=>(next)=>(action)=>{
//   console.log("logged action--->",action);
//   next(action);
// }
// store.subscribe(()=>{
  //   console.log("store Updated--->",store.getState());
  // })
