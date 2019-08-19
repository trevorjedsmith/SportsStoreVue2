import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class ShoppingCartLineComponent extends Vue {

	@Prop()
	line: any;

	get qvalue() {
		return this.line.quantity;
	}

	sendChangeEvent($event:any) {
		if ($event.target.value > 0) {
			this.$emit("quantity", Number($event.target.value));
			this.line.quantity = $event.target.value;
		} else {
			this.$emit("quantity", 1);
			this.line.quantity = 1;
		}
	}

	sendRemoveEvent() {
		this.$emit("remove", this.line);
	}
}
