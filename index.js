const keytar = require('keytar')

;(async () => {
    console.log("Creating password: ")
    await keytar.setPassword("example-app", "me@example.com", "examplepassword")
    console.log("Retreiving password: ")
    const retreivedPassword = await keytar.getPassword("example-app", "me@example.com")
    console.log(`  Retreived password is: ${retreivedPassword}`)
    console.log("Deleting password: ")
    await keytar.deletePassword("example-app", "me@example.com")
})()