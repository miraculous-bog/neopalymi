
const fn = (documents, events) => { 
	return { registerId: 193,
			 keyId: 456, 
			 path: 'city,name', 
			 name: 'Київ', 
			 limit: 20, 
			 sort: { 'data.city.name': 'asc' }, compareFunction: (a, b) => { return a.data.city.atuId - b.data.city.atuId; } }; }
