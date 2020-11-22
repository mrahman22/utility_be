const app = require("./app");
const Product = require("./db/schema");


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}......`)
})