<script lang="ts">
	let isValid: boolean = false;
	let name: string = '';
	let pitch: string = '';
	let submitter: string = '';
	let description: string = '';
	let nameIsValid: boolean = true;
	let pitchIsValid: boolean = true;
	let submitterIsValid: boolean = true;
	let descriptionIsValid: boolean = true;

	function changedName() {
		nameIsValid = name.length > 0;
		isValid = name.length > 0 && pitch.length > 0 && submitter.length > 0 && description.length > 0;
	}

	function changedPitch() {
		pitchIsValid = pitch.length > 0;
		isValid = name.length > 0 && pitch.length > 0 && submitter.length > 0 && description.length > 0;
	}

	function changedSubmitter() {
		submitterIsValid = submitter.length > 0;
		isValid = name.length > 0 && pitch.length > 0 && submitter.length > 0 && description.length > 0;
	}
	function changedDescription() {
		descriptionIsValid = description.length > 0;
		isValid = name.length > 0 && pitch.length > 0 && submitter.length > 0 && description.length > 0;
	}
</script>

<h1 class="page-title">Future Ordering Hackathon <span class="fo-red">001</span></h1>
<div class="container">
	<form method="POST">
		<h2>Register project</h2>

		<label>
			Project name<br />
			<input
				name="name"
				class={!nameIsValid ? 'required' : ''}
				type="text"
				bind:value={name}
				on:input={changedName}
			/>
		</label>
		<label>
			Pitch sentence<br />

			<input
				name="pitch"
				class={!pitchIsValid ? 'required' : ''}
				type="text"
				bind:value={pitch}
				on:input={changedPitch}
			/>
		</label>
		<label>
			Submitter<br />
			<input
				name="submitter"
				class={!submitterIsValid ? 'required' : ''}
				type="text"
				bind:value={submitter}
				on:input={changedSubmitter}
			/>
		</label>
		<label>
			Description<br />
			<textarea
				name="description"
				cols="40"
				rows="5"
				class={!descriptionIsValid ? 'textareaRequired' : ''}
				bind:value={description}
				on:input={changedDescription}
			/>
		</label>

		<button type="submit" value="Submit" disabled={!isValid}>Submit</button>
	</form>
</div>

<style>
	label {
		display: block;
		letter-spacing: 4px;
		padding-top: 30px;
		text-align: center;
		color: #000;
	}

	label input {
		background-color: transparent;
		border: 0;
		border-bottom: 2px solid #000;
		color: #000;
		font-size: 20px;
		letter-spacing: 1px;
		outline: 0;
		padding: 5px 20px;
		text-align: center;
		transition: all 0.3s;
		width: 400px;
	}

	.required {
		border-bottom: 4px solid #cd0a01;
	}
	.textareaRequired {
		border-bottom: 4px solid #cd0a01;
		border-top: 4px solid #cd0a01;
	}

	textarea {
		margin-top: 25px;
		width: 440px;
		height: 200px;
		font: 300 15px/1.5 Roboto, sans-serif;
		border-bottom: 2px solid #000;
		border-top: 2px solid #000;
		border-left: none;
		border-right: none;
		resize: none;
		outline: none;
		transition: all 0.3s;
	}

	textarea .required {
		border-bottom: 2px solid #cd0a01;
		border-top: 2px solid #cd0a01;
	}

	textarea:focus {
		width: 550px;
	}

	label input:focus {
		max-width: 100%;
		width: 550px;
	}

	button {
		background: transparent;
		color: #000;
		border: 2px solid #000;
		font-size: 15px;
		letter-spacing: 2px;
		padding: 20px 75px;
		text-transform: uppercase;
		cursor: pointer;
		display: inline-block;
		margin: 15px 30px;
		-webkit-transition: all 0.4s;
		-moz-transition: all 0.4s;
		transition: all 0.4s;
	}

	button:hover,
	button:focus {
		background-color: #cd0a01;
		color: #fff;
	}
	button:disabled,
	button[disabled] {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
	}

	form {
		text-align: center;
		border: 1px solid #000;
		background-color: #fff;
		border-radius: 5px;
		padding: 30px;
		width: 600px;
		box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
			rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
			rgba(240, 46, 170, 0.05) 25px 25px;
	}

	.container {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.fo-red {
		background-color: #cd0a01;
		padding-left: 10px;
		padding-right: 10px;
	}

	.page-title {
		color: #ffffff;
		margin-bottom: 50px;
		font: 700 50px/1.5 'Roboto', sans-serif;
	}
</style>
