import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { mapState } from "vuex";

@Component({
	components: {
		PageControls: require('../utilities/PageControls.vue.html')
	},
	filters: {
		currency(value:number) {
			return new Intl.NumberFormat("en-US",
				{
					style: "currency",
					currency: "USD"
				}).format(value);
		}
	}
})
export default class ProductListComponent extends Vue {


	get products() {
		return this.$store.getters.processedProducts;
	}
}
