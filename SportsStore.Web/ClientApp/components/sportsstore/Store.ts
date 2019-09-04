import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {
		ProductList: require('./ProductList.vue.html'),
		CategoryControls: require('../utilities/CategoryControls.vue.html')
	}
})
export default class StoreComponent extends Vue {

	created() {

		
	}
}
