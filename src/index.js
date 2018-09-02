import React, {Component} from 'react';

class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {
			error : false,
			errorMessage: ""
		};
		this.handleInputChange = this.handleInputChange.bind(this)
	}


	handleInputChange(e) {
		const {minLength, upper, lower, special, message} = this.props;
		const {errorMessage} = this.state;
		const password = e.target.value;
		let pattern = "^";

		if (message && typeof message === "string") {
			this.setState({
				errorMessage: message
			})
		}

		if (minLength && typeof minLength === "number" && minLength > 0 ) {
			pattern +=`(?=.{${minLength},})`
		}
		if (upper) {
			pattern += "(?=.*[A-Z])"
		}
		if (lower) {
			pattern += "(?=.*[a-z])"
		}
		if (special) {
			pattern += "(?=.*[0-9])"
		}

		const validation = new RegExp(pattern);
		const goodPassword = validation.test(password);

		if (!goodPassword) {
			this.setState({
				error : true,
				errorMessage: errorMessage.length ? errorMessage : "Invalid password"
			})
		} else {
			this.setState({
				error: false
			})
		}
	};

	render() {
		const {style} = this.props;
		const {error, errorMessage} = this.state;
		return (
			<div>
				<input type="password" className="pass-input" onChange={this.handleInputChange} style={style}/>
				{error && (
					<div className="error">
						{errorMessage}
					</div>
				)}
			</div>
		);
	}
}


export default Input
