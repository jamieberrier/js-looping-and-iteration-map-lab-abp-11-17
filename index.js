// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(function(element){
    return element.toLowerCase();
  });
return newDrivers;
}

function nameToAttributes(drivers){
  const splitArray = drivers.map(function(element){
    return element.split(" ");
   });

   const newArray = splitArray.map(function(element){
     return Object.assign ({firstName:element[0], lastName:element[1]});
   });
return newArray;
}

function attributesToPhrase(drivers){
  const newList = drivers.map(function(person){
    return `${person.name} is from ${person.hometown}`;
   });
return newList;
}
