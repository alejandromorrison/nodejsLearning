const requestHandler = ((req, res) => {
	const url = req.url
	const method = req.method;
	
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>main view</title></head>');
		res.write('<body>');
		res.write('<form action="/create-user" method="POST">');
		res.write('<input type="text" name="username">');
		res.write('<input type="submit" value="send">');
		res.write('</form>');
		res.write('</body></html>');
		return res.end();	
	}

	if (url === 'create-user' && method === 'POST') {
		const body = [];
		req.on('data', chunk => {
			console.log(chunk);
			body.push(chunk);
		});
	}

	if (url === '/users') {
		res.write('<html>');
		res.write('<head><title>users page</title></head>');
		res.write('<body>');
		res.write('<h1>Users route</h1>');
		res.write('<ul><li>Nelson Morrison</li>')
		res.write('<li>shayla salcedo</li>');
		return res.end();	
	}


	if (url === '/create-user') {
		res.write('<html>');
		res.write('<head><title>users page</title></head>');
		res.write('<body>');
		res.write('<h1>Users route</h1>');
		res.write('<ul><li>Nelson Morrison</li>')
		res.write('<li>shayla salcedo</li>');
		return res.end();	
	}
	
});

module.exports = requestHandler;
