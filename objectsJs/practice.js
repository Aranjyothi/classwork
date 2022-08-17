let radio = {
    station: [
        {
            name: 'npr',
            id: 0,
            song:[
                {
                    title:'the best part',
                    artist:'jyothi'
                },
                {
                    title: 'credit',
                    artist:'jyo'
                   
                },
                {
                    title: 'all about that boss',
                    artist:'dhiya'
                }
            ]
        },
        {
            name: '100.5',
            id: 1,
            song: [
                {
                    title: 'what if i',
                    artist: 'chasya',
                },
                {
                    title: '3 am',
                    artist: 'cherry'
                },
                {
                    title: 'lips are movin',
                    artist: 'reva'
                }
            ]

        }
    ]
};
   
function changeStation(max){
        //let stationNum = getRandomInt(2);
        let stationNum = Math.floor(Math.random() * max);
        //console.log(stationNum);

        let tempObj =null;

        if( radio.station.id == stationNum)
            tempObj = radio.station.id[stationNum];

        console.log("Now Playing: " + radio.station[stationNum].song[stationNum].title + " by " + radio.station[stationNum].song[stationNum].artist);

    }

    changeStation(2);

