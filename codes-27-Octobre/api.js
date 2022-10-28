// Option fonction anonyme
(async() => {
	const contenu = await fetch("https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_stations-velos-libre-service-nantes-metropole-disponibilites&q=&facet=banking&facet=bonus&facet=status&facet=contract_name");
    const contenuJson = await contenu.json()

    Allrecords=contenuJson.records
    const records=[]
    Allrecords.forEach(
        record=>(records.push(record.fields))
    )
    //console.log(extractRecords[0])

    console.log("liste des disponibilites service-nantes-metropole par station")
    for(let i in records){
        console.log("Station : "+i+1+", Adresse : "+records[i].address+", Nom : "+records[i].name+", Numéro : "+records[i].number)
    }

})()
