const auth = (state = {
    name1: "ahsan", age: 21
  }, action) => {
    switch (action.type) {
      case "SET_NAME":
        state = {
          ...state,
          name1: action.payload
        }
        break;
      case "SET_AGE":
        state = {
          ...state,
          age: action.payload
        }
        break;
    }
    return state
  }
  export default auth;
  
  
  // const mylogger=(store)=>(next)=>(action)=>{
  //   console.log("logged action--->",action);
  //   next(action);
  // }
  // store.subscribe(()=>{
    //   console.log("store Updated--->",store.getState());
    // })
  