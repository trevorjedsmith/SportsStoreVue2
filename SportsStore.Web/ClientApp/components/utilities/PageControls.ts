import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class PageControlsComponent extends Vue {

	get pageNumbers() {
		let numArray: number[] = [];
		for (let i = 1; i <= this.pageCount; i++) {
			numArray.push(i);
		}
		return numArray;
	}

	get pageCount() {
		return this.$store.getters.pageCount;
	}

	get currentPage() {
		return this.$store.state.currentPage;
	}

	setCurrentPage(pageNum: number) {
		this.$store.dispatch("setCurrentPage", pageNum);
	}

	changePageSize($event: any) {
		this.$store.dispatch("setPageSize", $event.target.value)
	}
}
