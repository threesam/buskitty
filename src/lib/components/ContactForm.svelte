<script>
	const handleSubmit = async (data) => {
		const formData = new FormData(data.currentTarget);

		const email = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message')
		};

		const sendEmail = await fetch('/email', {
			method: 'POST',
			body: JSON.stringify(email)
		});

		console.log('sendEmail', JSON.stringify(sendEmail, null, 2));
	};
</script>

<section>
	<div class="card">
		<h1>Contact</h1>

		<form
			on:submit|preventDefault={handleSubmit}
			action="/email"
			name="contact"
			method="POST"
			data-netlify="true"
			netlify-honeypot="“bot-field”"
		>
			<input type="hidden" name="form-name" value="contact" />

			<div>
				<label for="name">Name</label>
				<input type="name" name="name" />
			</div>

			<div>
				<label for="email">Email</label>
				<input type="email" name="email" />
			</div>

			<div>
				<label for="message">Message</label>
				<textarea name="message" />
			</div>

			<button type="submit">Send</button>
		</form>
	</div>
</section>

<style>
	section {
		height: 100vh;
		width: 100vw;
		display: grid;
		place-content: center;
	}

	label {
		font-family: var(--headingFont);
	}
</style>
