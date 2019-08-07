import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const testData = [];


// Setting up mock products
for (let i = 1; i <= 10; i++) {
	testData.push({
		id: i,
		name: `Product #${i}`,
		category: `Category ${i % 3}`,
		description: `This is Product #${i}`,
		price: i * 50
	});
}

export default new Vuex.Store({
	strict: true,
	state: {
		products: testData,
		productsTotal: testData.length,
		currentPage: 1,
		pageSize: 4,
		currentCategory: "All"
	},
	getters: {
		processedProducts: (state, getters) => {
			let index = (state.currentPage - 1) * state.pageSize;
			return getters.productsFilteredByCategory
				.slice(index, index + state.pageSize);
		},
		productsFilteredByCategory: state => state.products
			.filter(p => state.currentCategory == "All" || p.category == state.currentCategory),
		pageCount: (state, getters) =>
			Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
		categories: state => {
			let catArray = state.products.map(p => p.category);
			let allExisits = catArray.find(c => c === "All");

			if (!allExisits)
				catArray.push("All");

			return catArray.filter((item, index) =>
				catArray.indexOf(item) === index).sort();
		}			
	},
	mutations: {
		setCurrentPage(state, page) {
			state.currentPage = page;
		},
		setPageSize(state, size) {
			state.pageSize = size;
			state.currentPage = 1; //reset filter after page size
		},
		setCurrentCategory(state, category) {
			state.currentCategory = category;
			state.currentPage = 1;
		}
	},
	actions: {
		setCurrentPage({ state, commit }, pageNumber) {
			commit("setCurrentPage", pageNumber);
		},
		setPageSize({ state, commit }, pageSize) {
			commit("setPageSize", pageSize);
		},
		setCurrentCategory({ state, commit }, category) {
			commit("setCurrentCategory", category);
		}
	}

})