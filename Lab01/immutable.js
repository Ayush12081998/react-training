const user = {name : "Ayush Singh Jaiswal", age : 25, gender : 'Male'}

console.log(user);

const newUser = {}

const updatedUser=Object.assign(newUser,user,{age:26})

console.log(updatedUser)