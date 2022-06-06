const express = require ('express')
const detect = require ('detect-port')
const os = require("os")
const app = express()
const default_ports = [ 64500, 60500, 30500]
const iteratorCreator = require('./iterator-creater');
const iterableDefaultPorts = iteratorCreator(default_ports);
const ip = require('ip');



app.get('/', (req, res) => {
  
  res.send('Hello World!')
})

function serve(availablePortsIterator){
	let current_port = availablePortsIterator.next()

	if (current_port.done ){
		throw 'all available ports to serve are occupied, cant start server';
	}else{
		detect(current_port.value).then((_port)=>{
			if (current_port.value==_port){
				app.listen(current_port.value, () => {
  					console.log(`Example app listening on port ${current_port.value}`)
				});
			}else{
				console.log(`port: ${current_port.value} was occupied.`);
				serve()
			}
		})
	}
	
}

console.log(os.hostname())
//serve(iterableDefaultPorts);

