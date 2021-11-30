import axios from "axios";

export const getAllSensors = ({ commit }) => {
    axios.get('https://btsapii.herokuapp.com/api/sensor')
    .then(response => {
        commit('SET_SENSORS', response.data);
    })
}