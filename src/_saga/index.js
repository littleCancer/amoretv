import { spawn, call } from 'redux-saga/effects';
import { delay } from "redux-saga";

const makeRestartable = (saga) => {
    return function*() {
        while (true) {
            try {
                 yield call(saga);
                console.error("unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!",saga);
            } catch (e) {
                console.error("Saga error, the saga will be restarted",e);
            }
            yield delay(1000); // Workaround to avoid infinite error loops
        }
    }
}

const rootSagas = [

].map(makeRestartable);

export default function* rootSaga() {
    yield rootSagas.map(saga => call(saga));
}