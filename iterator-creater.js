module.exports = function* (vector){
	
	/*
	var next_index = 0;
	return {
		next:function(){
			return next_index < vector.length ? 
			{value:vector[next_index++],done:false}:
			{done:true}


		}
	}
	*/

	yield* vector
}
