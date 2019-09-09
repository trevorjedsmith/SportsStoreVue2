import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class CheckoutComponent extends Vue {

	created() {
	}

	private name: string = "";

	submitOrder() {
		// todo save order
	}
}
