function name(paramSteps, paramFootPrintInMeter,paramKmInH) {
    let length = paramSteps * paramFootPrintInMeter;
    let rest = Math.floor(length / 500);
    let  totaltime = (length / paramKmInH / 1000 * 60);
    let totaltimeInSeconds = Math.ceil((rest + totaltime) * 60);
    let result = new Date(null, null , null , null, null, totaltimeInSeconds);
    console.log(result.toTimeString().split(' ')[0])
}
name(4000, 0.60, 5)