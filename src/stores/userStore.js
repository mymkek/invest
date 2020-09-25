import {autorun, observable} from "mobx";


class UserStore {
    @observable data = null;

    constructor() {
        autorun(() => console.log(this.report));
    }

    setData(data) {
        this.data = data;
    }
}


export const todoStore = new UserStore();