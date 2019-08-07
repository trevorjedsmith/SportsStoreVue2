import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class CategoryControlsComponent extends Vue {

	get currentCategory() {
		return this.$store.state.currentCategory;
	}

	get categories() {
		return this.$store.getters.categories;
	}

	setCurrentCategory($event:any) {
		this.$store.dispatch("setCurrentCategory", $event.target.value);
	}
}
