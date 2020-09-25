import { observable, action } from 'mobx';


class UserStore {
    @observable data = '21321312f';

    @action setData(data) {
        this.data = data;
    }
}


export default new UserStore();