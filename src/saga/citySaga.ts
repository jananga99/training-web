
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCityList, fetchCityListSuccess, fetchCityListFailed } from './citySlice';
import {collection, Firestore, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from '../utils/firebaseConfig';
import {City} from "./City";


async function getCities(): Promise<City[]> {
    const q = query(collection(db, "Cities"));
    return new Promise((resolve, reject)=>{
        let cityList: City[] = []
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // console.log(cityList)
                cityList.push({
                    title: doc.data().title,
                    name: doc.data().name,
                })
            });
            resolve(cityList)
        });
    })
}

function* fetchCityList1() {
    try {
        const response: City[] = yield call(getCities);
        yield put(fetchCityListSuccess(response));
    } catch (error) {
        console.log('Failed to fetch city list', error);
        yield put(fetchCityListFailed());
    }
}

export default function* citySaga() {
    yield takeLatest(fetchCityList.type, fetchCityList1);
}