export default class MainService {
    _apiBase = '/api';

    getUser = () => {
        // TODO send GET

    };

    auth = (param) => {
        if (typeof param !== 'boolean') {
            throw new Error(`Wrong data type of ${param}`);
        }
        // const res = await fetch(`${this._apiBase}/${param}`);
        // if (res.ok){
        localStorage.setItem('isLogged', param.toString());
        // }

        return localStorage.getItem('isLogged') === 'true';
    };
}