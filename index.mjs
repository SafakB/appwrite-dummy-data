import { Client, Databases } from "appwrite";

const WAIT_TIME = 50;

// Appwrite client setup
let client = new Client();

client
    .setEndpoint('https://localhost/v1') // Appwrite server endpoint
    .setProject('65ba1d991a2aec5b2374'); // Project ID

let database = new Databases(client);

// Dummy data count
const count = 250000;

for (let i = 0; i < count; i++) {
    let dummyData =
    {
        title: "Example Name " + i,
        description: "Example Description" + i,
        content: "Example Content" + i,
        enabled: i % 2 == 0 ? true : false,
    };

    // Create a new document to the collection
    database.createDocument('65ba4d642a413bcc21f6', '65bc11b2be70c218fc9e', 'unique()', dummyData)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    /* wait delay */
    await new Promise(resolve => setTimeout(resolve, WAIT_TIME));
}


