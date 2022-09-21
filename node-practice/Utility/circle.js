const area = radius =>{
return radius*radius * Math.PI
}
const circumference = radius =>{
    return 2* Math.PI *radius
}

module.exports={
    area,
    circumference,
}