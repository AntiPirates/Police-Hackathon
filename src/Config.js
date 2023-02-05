class Config {

    // For app details page
    static appType = "";
    static appId = "";

    // For schedule
    static isAutomatedSchedule = true;
    static scheduleTime = "";
    
    static phoneNumbers = [
        {
            contact: "6127961931",
            freq: '23'
        },
        {
            contact: "8841463476",
            freq: '12'
        },
        {
            contact: "6127901598",
            freq: '07'
        },
        {
            contact: "8207418391",
            freq: '18'
        },
        {
            contact: "6127917522",
            freq: '14'
        },
        {
            contact: "7931324132",
            freq: '56'
        },
        {
            contact: "6127965938",
            freq: '28'
        },
        {
            contact: "6128101184",
            freq: '22'
        },
        {
            contact: "7931361883",
            freq: '17'
        },
        {
            contact: "6127971610",
            freq: '04'
        },
        {
            contact: "8708604737",
            freq: '32'
        },
        {
            contact: "6570597694",
            freq: '19'
        }
    ];

    static trapDetails = [
        {
            name: "playstore",
            freq: '50'
        },
        {
            name: "applestore",
            freq: '23'
        },
        {
            name: "www",
            freq: '45'
        }
    ];
    static deceptivePhoneCalls = '120';
    static suspiciousDownloads = '250';
    static failedVirustotal = '80';

    static failedVirusTotalApps = {
        1: {
            id: 1, 
            name: "1XBet",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "yes"
        },
        2: {
            id: 2, 
            name: "Dream 11",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '4',
            detectionStatus: "malicious",
            histogram: "url"
        },
        3: {
            id: 3, 
            name: "App 3",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '2',
            detectionStatus: "suspicious",
            histogram: "url"
        },
        4: {
            id: 4, 
            name: "App 4",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '1',
            detectionStatus: "threatful",
            histogram: "url"
        },
        5: {
            id: 5, 
            name: "App 5",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "malicious",
            histogram: "url"
        },
        6: {
            id: 6, 
            name: "App 6",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '1',
            detectionStatus: "threatful",
            histogram: "url"
        },
        7: {
            id: 7, 
            name: "App 7",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "malicious",
            histogram: "url"
        }
    };

    static suspiciousDownloadApps = {
        1: {
            id: 1, 
            name: "1XBet",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "yes"
        },
        2: {
            id: 2, 
            name: "Dream 11",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '4',
            detectionStatus: "malicious",
            histogram: "url"
        },
        3: {
            id: 3, 
            name: "App 3",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '2',
            detectionStatus: "suspicious",
            histogram: "url"
        },
        4: {
            id: 4, 
            name: "App 4",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '1',
            detectionStatus: "threatful",
            histogram: "url"
        },
        5: {
            id: 5, 
            name: "App 5",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "malicious",
            histogram: "url"
        },
        6: {
            id: 6, 
            name: "App 6",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '1',
            detectionStatus: "threatful",
            histogram: "url"
        },
        7: {
            id: 7, 
            name: "App 7",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "malicious",
            histogram: "url"
        }
    };

    static deceptiveCallApps = {
        1: {
            id: 1, 
            name: "1XBet",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "yes"
        },
        2: {
            id: 2, 
            name: "Dream 11",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '4',
            detectionStatus: "malicious",
            histogram: "url"
        },
        3: {
            id: 3, 
            name: "App 3",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '2',
            detectionStatus: "suspicious",
            histogram: "url"
        },
        4: {
            id: 4, 
            name: "App 4",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '1',
            detectionStatus: "threatful",
            histogram: "url"
        },
        5: {
            id: 5, 
            name: "App 5",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "malicious",
            histogram: "url"
        },
        6: {
            id: 6, 
            name: "App 6",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews:[
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '1',
            detectionStatus: "threatful",
            histogram: "url"
        },
        7: {
            id: 7, 
            name: "App 7",
            packageName: "11.2.1",
            dev: "Sybo",
            reviews: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a urna ipsum."
                ],
            rating: '3',
            detectionStatus: "malicious",
            histogram: "url"
        }
    };
}

export { Config }