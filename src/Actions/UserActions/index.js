const setName = (name1) => {
    //console.log("hhhhhh",name1);
    return ({
        type: "SET_NAME",
        payload: name1
    })
}
export default setName;