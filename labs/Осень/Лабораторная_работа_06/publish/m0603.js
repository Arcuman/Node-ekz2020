let nodemailer = require('nodemailer');

exports.send = function (message) {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'anyon.programmer.borisov@gmail.com',
			pass: 'qazsexdrw123'
		}
	});

	var mailOptions = {
		from: 'anyon.programmer.borisov@gmail.com',
		to: 'anton.borisov.01@mail.ru',
		subject: 'message',
		text: message
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
};

exports.sendMessage = (message, sender, receiver) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'anyon.programmer.borisov@gmail.com',
			pass: 'qazsexdrw123'
		}
	});
	var mailOptions = {
		from: sender,
		to: receiver,
		subject: `message from ${sender}`,
		text: message
	};
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
}