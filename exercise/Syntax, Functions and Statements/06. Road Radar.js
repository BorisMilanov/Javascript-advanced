function radar ([speed, area]) {
    function calculateOverLimit(limit,speed) {
        if (limit >= speed) {
            console.log('');
            return;
            
        }
        let overLimit = speed - limit;
        if (overLimit <= 20) {
            console.log('speeding');           
        }else if (overLimit <= 40) {
            console.log('excessive speeding')
            
        } else if (overLimit > 40){
            console.log('reckless driving')
        }
    }
    if (area === 'city') {
        calculateOverLimit(50,speed);
    }else if (area === 'residential') {
        calculateOverLimit(20,speed);
    }else if (area === 'interstate') {
        calculateOverLimit(90,speed);
    }else if (area === 'motorway') {
        calculateOverLimit(130,speed);
    }

}
radar([10,'residential'])