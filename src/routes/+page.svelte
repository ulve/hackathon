<script lang="ts">
	export let data;

	import SvelteMarkdown from 'svelte-markdown';
	let primaryValue = '';
	let secondaryValue = '';
	let tertiaryValue = '';

	function primary(event: { target: { id: string } }) {
		primaryValue = event.target.id.split('-')[0];
		let a = document.getElementsByClassName('primary');
		for (let i = 0; i < a.length; i++) {
			if (a[i].id != event.target.id) (a[i] as HTMLInputElement).checked = false;
		}
	}

	function secondary(event: { target: { id: string } }) {
		secondaryValue = event.target.id.split('-')[0];
		let a = document.getElementsByClassName('secondary');
		for (let i = 0; i < a.length; i++) {
			if (a[i].id != event.target.id) (a[i] as HTMLInputElement).checked = false;
		}
	}

	function tertiary(event: { target: { id: string } }) {
		tertiaryValue = event.target.id.split('-')[0];
		let a = document.getElementsByClassName('tertiary');
		for (let i = 0; i < a.length; i++) {
			if (a[i].id != event.target.id) (a[i] as HTMLInputElement).checked = false;
		}
	}

	function submit() {
		console.log(`primary: ${primaryValue}`);
		console.log(`secondary: ${secondaryValue}`);
		console.log(`tertiary: ${tertiaryValue}`);
	}
</script>

<h1 class="page-title">Future Ordering Hackathon <span class="fo-red">001</span></h1>
<div class="projects">
	{#each data.submissions as project}
		<div class="project">
			<h2 class="project-title">{project.name}</h2>
			<img src={'https://robohash.org/' + project.id + '.png'} alt="Super annoing avatar" />

			<p class="pitch">{project.pitch}</p>
			<div class="md">
				<SvelteMarkdown source={project.description} />
			</div>
			<h3 class="disabled">Your choice for project</h3>
			<div class="radio-group">
				<div>
					<input
						type="radio"
						id={project.name.replace(' ', '_') + '-primary'}
						value="Primary"
						name={project.name.replace(' ', '_')}
						on:change={primary}
						class="primary disabled"
					/>
					<label class="disabled" for={project.name.replace(' ', '_') + '-primary'}>Primary</label>
				</div>

				<div>
					<input
						type="radio"
						id={project.name.replace(' ', '_') + '-secondary'}
						name={project.name.replace(' ', '_')}
						value="Secondary"
						on:change={secondary}
						class="secondary disabled"
					/>
					<label class="disabled" for={project.name.replace(' ', '_') + '-secondary'}
						>Secondary</label
					>
				</div>

				<div>
					<input
						type="radio"
						id={project.name.replace(' ', '_') + '-tertiary'}
						name={project.name.replace(' ', '_')}
						on:change={tertiary}
						class="tertiary disabled"
						value="Tertiary"
					/>
					<label class="disabled" for={project.name.replace(' ', '_') + '-tertiary'}>Tertiary</label
					>
				</div>
			</div>
		</div>
	{/each}
</div>
<div class="button-container disabled">
	<button type="submit" class="disabled" value="Submit" on:click={submit}>Submit</button>
</div>

<style>
	.pitch {
		font-style: italic;
	}

	.button-container {
		display: flex;
		justify-content: center;
	}

	button {
		background: #fff;
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

	.disabled {
		pointer-events: none;
		opacity: 0.4;
	}

	.radio-group {
		color: gray;
		margin: 25px 25px 25px 25px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	input[type='radio'] {
		display: none;
	}

	label {
		position: relative;
		padding-left: 30px;
		color: #000;
		cursor: pointer;
		transition: color 0.3s;
	}

	label:before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color: transparent;
		border: 2px solid #fff;
		transition: background-color 0.3s;
	}

	input[type='radio']:checked + label:before {
		background-color: #7f0001;
	}

	input[type='radio']:focus + label {
		color: #cd0a01;
	}

	input[type='radio']:checked + label {
		color: #cd0a01;
	}

	input[type='radio'] + label:before {
		box-shadow: 0 0 10px #cd0a01;
	}

	input[type='radio']:checked + label:before {
		box-shadow: 0 0 10px #cd0a01, 0 0 20px #cd0a01, 0 0 30px #cd0a01;
	}

	input[type='radio']:hover + label:before {
		background-color: #cd0a01;
	}

	input[type='radio']:focus + label:before {
		background-color: #cd0a01;
	}

	.fo-red {
		background-color: #cd0a01;
		padding-left: 10px;
		padding-right: 10px;
	}

	img {
		position: absolute;
		top: 0px;
		right: 0px;
	}

	.project-title {
		font: 700 20px/1.5 'Roboto', sans-serif;
		margin-bottom: 25px;
	}

	.page-title {
		color: #ffffff;
		margin-bottom: 50px;
		font: 700 50px/1.5 'Roboto', sans-serif;
	}

	img {
		margin: 10px;
		max-width: 100px;
		height: 100px;
	}

	.project {
		padding: 25px;
		color: #000;
		background: #fff;
		box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
			rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
			rgba(240, 46, 170, 0.05) 25px 25px;

		width: 500px;
		position: relative;
		border: 1px solid #000;
		border-radius: 5px;
		margin: 10px;
	}

	.projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		gap: 20px;
	}

	h3 {
		font: 700 15px/1.5 'Roboto', sans-serif;
	}
</style>
