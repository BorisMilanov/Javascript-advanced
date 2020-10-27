function name(data) {
    let parsedData = data.reduce((db,componentData)=>{
        let [systemName,componentName,subcomponentName] = componentData.split('|').map(x => x.trim());
        if (!db[systemName]) {
            db[systemName] = {[componentName]: [subcomponentName]};
            return db;
        }
        if (!db[systemName][componentName]) {
            db[systemName][componentName] = [subcomponentName]
            return db;
        }
        db[systemName][componentName] = [...db[systemName][componentName],subcomponentName]
        return db;
    },{})
    let sortedSystems = Object.keys(parsedData).sort((a,b)=> parsedData[a].length === parsedData[b].length || a.localeCompare(b)
    )
}