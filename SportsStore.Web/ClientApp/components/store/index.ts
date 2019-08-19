import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

// Internal
import { Product, IProduct } from "../models/Product";

Vue.use(Vuex);

const baseUrl: string = 'http://localhost:49951/api';
const productsUrl: string = `${baseUrl}/products`;
const categoriesUrl: string = `${baseUrl}/products/getCategories`;
const productsArray: Product[] = [];
const lines: any[] = [];


const testData = [];

export default new Vuex.Store({
	strict: true,
	state: {
		products: productsArray,
		categories: [],
		productsTotal: productsArray.length,
		currentPage: 1,
		pageSize: 4,
		currentCategory: "All",
		lines:lines
	},
	getters: {
		// Product Getters
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
			return state.categories;
		},
		// Cart Getters
		itemCount: state => state.lines.reduce((total: any, line: any) =>
			total + line.quantity, 0),
		totalPrice: state => state.lines.reduce((total: any, line: any) =>
			total + (line.quantity * line.product.price),0),
		
	},
	mutations: {
		// Store Mutations
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
		},
		setData(state, data:any) {
			state.products = data.pData;
			state.productsTotal = data.pData.length;

			data.cData.push("All");
				
			state.categories = data.cData.sort();
		},
		// Cart Mutations
		addProduct(state, product) {
			let line = state.lines.find(line => line.product.id === product.id);
			if (line != null) {
				line.quantity++;
			} else {
				state.lines.push({ product: product, quantity: 1 });
			}
		},
		changeQuantity(state, update) {
			update.line.quantity = update.quantity;
		},
		removeProduct(state, lineToRemove) {
			let index = state.lines.findIndex(line => line === lineToRemove);
			if (index > -1) {
				state.lines.splice(index, 1);
			}
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
		},
		setProduct({ state, commit }, product: Product) {
			commit("addProduct", product);
		},
		async getData(context) {
			let pData = (await axios.get(productsUrl)).data;
			let cData = (await axios.get(categoriesUrl)).data;

			context.commit("setData", { pData, cData });
		}
	}

})