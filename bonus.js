const http = require('http')    //Pull in a useful node package


const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                //   console.log("Look for query parameter data: " + search_params.get("data"))
                const bitsofadvice = ["It isn’t the mountains ahead to climb that wear you out it’s the pebble in your shoe. –Muhammed Ali.",
                "Success is a lousy teacher. It seduces smart people into thinking they can’t lose. –Bill Gates",
                "For the past 33 years, I have looked in the mirror every morning and asked myself: ‘If today were the last day of my life, would I want to do what I am about to do today?’ And whenever the answer has been ‘No’ for too many days in a row, I know I need to change something. – Steve Jobs",
                " think that we all do heroic things, but hero is not a noun, it’s a verb. – Robert Downey Jr.",
                "The biggest risk is not taking any risk… In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks. – Mark Zuckerberg",
                "f you live long enough, you’ll make mistakes. But if you learn from them, you’ll be a better person. It’s how you handle adversity, not how it affects you. The main thing is never quit, never quit, never quit. – Bill J. Clinton",
                ]
                let randomIndex = Math.floor(Math.random() * bitsofadvice.length)
                // Process the queries here
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${bitsofadvice[randomIndex]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})