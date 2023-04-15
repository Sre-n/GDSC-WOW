async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/d4data/bias-detection-model",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "I like you. I love you"}).then((response) => {
	console.log(JSON.stringify(response));
});