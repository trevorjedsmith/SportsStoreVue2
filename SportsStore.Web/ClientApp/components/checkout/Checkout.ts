import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import VeeValidate from "vee-validate"
import axios from "axios";

//Urls
const baseUrl: string = 'http://localhost:49951/api';
const ordersUrl: string = `${baseUrl}/orders`;

// Internal
import { Order } from '../models/Order';

@Component({
	components: {

	}
})
export default class CheckoutComponent extends Vue {

	private order: Order = new Order();

	created() {
	}

	private name: string = "";

	submitOrder() {
		// todo save order
		this.$validator.validate().then(valid => {
			if (valid) {
				// Get the lines from state
				this.order.lines = this.$store.state.lines;

				this.postOrder().then((order: any) => {
					this.$store.dispatch("clearCartData");
					this.$router.push(`/thanks/${order.data.id}`);
				}).catch((error) => {
					console.error(error);
				});
			}
		});
	}

	postOrder() {
		return axios.post(ordersUrl, this.order);
	}
}
