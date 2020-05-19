const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost',(err, connection) => {
    if (err) {
        throw err;
    }
    connection.createChannel((err, channel) => {
        if (err) {
            throw err;
        }

        var queue = 'Message';

        channel.assertQueue(queue, {
            durable: false
        });
        channel.consume(queue, (msg) =>
        {
        	console.log("Received: %s ",msg.content.toString());	
        },
        {
        	noAck : true
        });
        
    });
   
});