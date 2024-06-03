let express = require('express')

let app = express()


app.get('/', (req, res) => {

    res.status(200).json({
        message: "user get success"
    })
})


app.listen(3001, () => {
    console.log("server started success");
})