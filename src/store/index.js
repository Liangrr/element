import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	city:'定位'
}

const mutations = {
	changeCity(state,params){
		state.city = params.city;
	}
}

const store = new Vuex.Store({
	state,
	mutations,
});

export default store;