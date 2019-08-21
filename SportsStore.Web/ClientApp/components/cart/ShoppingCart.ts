import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {
		ShoppingCartLine:require('./ShoppingCartLine.vue.html')
	}
})
export default class ShoppingCartComponent extends Vue {

	public lines: any[] = [];

	mounted() {
		this.lines = this.$store.state.lines;
	}

	get totalPrice() {
		return this.$store.getters.totalPrice;
	}

	handleQuantityChange(line:any,$event:any) {

		let options = {
			line: line,
			qty:$event
		}
		this.$store.dispatch("changeQuantity",options );
	}

	remove(line:any) {
		this.$store.dispatch("removeLine", line);
	}
}
