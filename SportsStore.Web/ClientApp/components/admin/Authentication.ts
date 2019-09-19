import Vue from 'vue';
import { Component } from 'vue-property-decorator';

// Internal Imports
import { LoginViewModel } from '../models/LoginViewModel';

@Component({
	components: {

	}
})
export default class AuthenticationComponent extends Vue {

	private showFailureMessage: boolean = false;
	private username: string = "";
	private password: string = "";

	async handleAuth() {

		this.$validator.validate().then(valid => {
			if (valid) {
				let loginViewModel: LoginViewModel = new LoginViewModel(this.username, this.password);
				this.$store.dispatch("authenticate", loginViewModel);

				if (this.authenticated) {
					this.$router.push('/admin');
				}
				else {
					this.showFailureMessage = true;
				}
			}
		});
	}

	get authenticated() {
		return this.$store.state.authenticated;
	}
}

