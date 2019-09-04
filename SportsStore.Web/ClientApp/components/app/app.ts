import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
    components: {

    }
})
export default class AppComponent extends Vue {

	created() {
		this.$store.dispatch("getData");
		this.$store.dispatch("initialiseCart", this.$store);
	}
}

