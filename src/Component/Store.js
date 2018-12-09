import firebase from "./Firebase";
var redux = require("redux");
var oldState = {
    selected : null,
    search : null
}
var allReducers = (state = oldState , action) => {
    switch (action.type) {
        case "addData" :
        firebase.push(action.item);
        return {...state,search : null};
        case "selected" :
        return {...state,selected : action.selected};
        case "editData" :
        firebase.child(action.item.id).update({
            name : action.item.name,
            tel : action.item.tel
        })
        return {...state,selected : null};
        case "deleteData" :
        firebase.child(action.id).remove();
        return {...state};
        case "search" :
        return {...state,search : action.search};
        default:
            return state
    }
}
var store = redux.createStore(allReducers);

export default store;