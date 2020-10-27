function carModel(data){
    let parsedData = {};
    for(let carData of data){
        let [carBrand, carModel, producedCars] = carData.split('|').map(x => x.trim());
        producedCars = +(producedCars);
        if(!parsedData[carBrand]){
            parsedData[carBrand] = {[carModel]: +(producedCars)};
                       
        }else if(!parsedData[carBrand][carModel]){
            parsedData[carBrand][carModel] = +(producedCars);
           
        }else{
            parsedData[carBrand][carModel] += +(producedCars);              
        }
    }
    let result = Object.entries(parsedData);
    for(let item of result){
        console.log(item[0]);
        let arr = Object.entries(item[1]);
        for(let val of arr){
            console.log(`###${val[0]} -> ${val[1]}`);
        }
    }
}