let placesToVisit = ['Los Angeles, ', 'New York, ', 'Chicago, ', 'Miami, ', 'Florida, ', 'Jackson, '];
document.write('Places to visit ');

function outputArray(theArray){
    for (var i = 0; i < placesToVisit.length; i++) {
        document.write(placesToVisit[i]);
    };
};

outputArray(placesToVisit);

document.write('<br>' + 'Places to visit ');

placesToVisit.splice(0, 2);
outputArray(placesToVisit);

placesToVisit.sort();
document.write('<br>' + 'Places to visit ');
outputArray(placesToVisit);