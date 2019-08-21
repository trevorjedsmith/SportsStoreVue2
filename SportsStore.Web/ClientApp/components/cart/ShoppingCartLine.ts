import Vue from 'vue';
import { Component, Prop , Watch} from 'vue-property-decorator';

@Component({
	components: {

	}
})
export default class ShoppingCartLineComponent extends Vue {

	@Prop()
	line: any;
	private qVal:number = 0;

	mounted() {
		this.qVal = this.line.quantity;
	}

	@Watch('line.quantity')
	onPropertChanged(value: number, oldValue: number) {
		this.qVal = value;
	}

	sendChangeEvent($event:any) {
		if ($event.target.value > 0) {
			this.$emit("quantity", Number($event.target.value));
		} else {
			this.$emit("quantity", 1);
		}
	}

	sendRemoveEvent() {
		this.$emit("remove", this.line);
	}
}
