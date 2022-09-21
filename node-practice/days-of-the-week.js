let firstname;


module.exports.school = 'Per schoals'


module.exports.weekdays = ['su','mo','tu','we','th','fr','sa']

module.exp
let schools = "Per Scholas"
// module.exports = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
let days =['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
getWeekday = function(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return this.weekdays[dayNo];
};
module.exports = {
    schools,days,getWeekday
}
//module.exports is a special object we use in our module to attach or assign functionality to

