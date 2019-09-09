import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class OrderThanksComponent extends Vue {

	created() {
	}

	get orderId() {
		return this.$route.params.id;
	}
}
