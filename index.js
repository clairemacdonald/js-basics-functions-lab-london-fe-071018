// Code your solution in this file!


function distanceFromHqInBlocks (location) {
  const hq = 42;
  return location > hq ? location%hq : hq %location;
}


function distanceFromHqInFeet (location) {
 return distanceFromHqInBlocks(location)*264;
}

function distanceFromLocationInBlocks (location, destination) {
  return location > destination ? location%destination : destination %location;
}
function distanceTravelledInFeet(location, destination) {
  return distanceFromLocationInBlocks(location, destination)*264;
}

function calculatesFarePrice (location, destination) {
  const distance = distanceTravelledInFeet(location, destination);
  if (distance <= 400){
    return 0; 
    
  } else if  (distance > 400 && distance <= 2000){
    return (distance-400) * 0.02; 
    
  }else if  (distance > 2000 && distance <= 2500){
    return 25;
 
  } else {
    return 'cannot travel that far';
  }
  
  
   
}