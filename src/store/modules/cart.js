const state = {
	total: 0,
	products: []
};

const mutations = {
	'BUY_PRODUCT' (state, {id, quantity, price}) {
		const record = state.products.find(element => element.id === id);
		if (record) {
			record.quantity += quantity;
		} else {
			state.products.push({
				id: id,
				quantity: quantity
			});
		}
		state.total += price * quantity;
	},
	'DEL_PRODUCT' (state,  {id, quantity, price}) {
		const record = state.products.find(element => element.id === id);
		if (record.quantity > quantity) {
			record.quantity -= quantity;
		} else {
			state.products.splice(state.products.indexOf(record), 1);
		}
		state.total -= price * quantity;
	}
};

const actions = {
	delProduct({ commit }, order) {
		commit('DEL_PRODUCT', order);
	}
};

const getters = {
	order (state, getters) {
		return state.products.map(product => {
			const record = getters.products.find(element => element.id === product.id);
			return {
				id: product.id,
				quantity: product.quantity,
				name: record.name,
				price: record.price
			}
		});
	},
	total (state) {
		return state.total;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};

