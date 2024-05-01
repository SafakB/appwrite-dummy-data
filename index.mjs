import { Client, Databases } from "appwrite";
import { readFileSync } from 'fs';

const rawData = readFileSync('first-names.json');
const rawData1 = readFileSync('middle-names.json');
const names = JSON.parse(rawData);
const lastNames = JSON.parse(rawData1);

const WAIT_TIME = 50;

// Appwrite client setup
let client = new Client();

client
    .setEndpoint('https://localhost/v1') // Appwrite server endpoint
    .setProject('6632574e002f32c908b3'); // Project ID

let database = new Databases(client);

// Dummy data count
const count = 1000000;

for (let i = 0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * 10000);
    let dummyData =
    {
        title: rastgeleIsim(names) + " " + rastgeleIsim(lastNames),
        description: "Example Description " + i,
        content: "Example Content " + randomNumber,
        enabled: randomNumber % 2 == 0 ? true : false,
    };

    // Create a new document to the collection
    database.createDocument('65ba4d642a413bcc21f6', '65bc11b2be70c218fc9e', 'unique()', dummyData)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    /* wait delay */
    await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
}

function rastgeleIsim(isimler) {
    const rastgeleIndex = Math.floor(Math.random() * isimler.length);
    return isimler[rastgeleIndex];
}