import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class CartSummaryComponent extends Vue {

	get itemCount() {
		return this.$store.getters.itemCount;
	}

	get totalPrice() {
		return this.$store.getters.totalPrice;
	}
}
