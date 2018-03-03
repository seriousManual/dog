import {all} from 'redux-saga/effects'

function* dummySaga() {

}

export default function () {
  return function* () {
    yield all([
      dummySaga()
    ])
  }
}