import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {
		ProductList: require('./ProductList.vue.html')
	}
})
export default class StoreComponent extends Vue {
}
