import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '6fbcbe4526184d7f80bb2de2338d1d84', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;