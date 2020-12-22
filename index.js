const keytar = require('keytar')

;(async () => {
    await keytar.setPassword("example-app", "me@example.com", "examplepassword")
    const retreivedPassword = await keytar.getPassword("example-app", "me@example.com")
    console.log(`Retreived password is: ${retreivedPassword}`)
    await keytar.deletePassword("example-app", "me@example.com")
})()