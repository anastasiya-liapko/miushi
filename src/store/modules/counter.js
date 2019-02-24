import * as types from '../types.js';

const state = {
    counter: 0
};

const getters = {
    [types.COUNTER]: state => {
        return state.counter;
    }
};

const mutations = {
    increment: (state, payload) => {
        state.counter += payload;
    },
    decrement: state => {
        state.counter--;
    }
};

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: context => {
        context.commit('decrement');
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.by);
        }, payload.duration);
    },
    asyncDecrement: ({ commit }) => {
        setTimeout(() => {
            commit('decrement');
        }, 1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};