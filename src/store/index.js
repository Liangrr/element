import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	city:'定位',
	cateId:'',
	shopTitle:'美食',
}

const mutations = {
	changeCity(state,params){
		state.city = params.city;
    },
    changeCate(state,params){
        state.cateId = params.cateId;
    },
    changeTitle(state,params){
    	state.shopTitle = params.shopTitle;
    }
}

const store = new Vuex.Store({
	state,
	mutations,
});


export default store;