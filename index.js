const drivers = ['Gordon', 'Heston', 'Jamie', 'Antonio', 'Farah', 'Boston']


function findMatching(drivers, name){
    return drivers.filter(drivers => drivers.toLowerCase().includes(name.toLowerCase()))

};

function fuzzyMatch(drivers, stringOfDrivers){
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, stringOfDrivers.length) === stringOfDrivers.toLowerCase()
    })
    };




function matchName(drivers, namesOfDrivers){
    return drivers.filter((data) => data.name === namesOfDrivers);
};