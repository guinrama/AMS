// Namespace used to avoid the naming collision

var serverApp = {
    merge: function(a, b) {
        var keysArr = Object.keys(b);
        for (var i = 0; i < keysArr.length; i++) {
            a[keysArr[i]] = b[keysArr[i]];
        }
        return a;
    },
    processdata: function(a, b) {
        if (b && b["uname"]) {
            var uName = b["uname"];
            var newObj = {};
            newObj[uName] = {};
            var karr = Object.keys(b);
            for (var i = 0; i < karr.length; i++) {
                if (karr[i] !== "category") {
                    newObj[uName][karr[i]] = b[karr[i]];
                }
            }
        } else {
            newObj = b;
        }
        return this.merge(a, newObj);
    }
}

// Writing a Server to fetch JSON data.

// Creating a serverside API to fetch login details from server and validate before login.

var http = require('http'); // Requires http.
var fs = require('fs'); // Requires File system
var path = require('path'); // requires path.

var httpServer = http.createServer(function(req, res) {

    // This method is used for solving the cross origin issues.
    res.writeHead(200, {
        'Content-Type': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    });

    if (req.method === "POST") {
        console.log("Inside Post request...!!!");
        req.setEncoding('utf8');
        var body = '',
            sucessFlag = false,
            content = fs.readFileSync(path.resolve('data.json'));

        req.on('data', function(chunk) {
            body += chunk;
            console.log("reading Data:" + body);
        });

        req.on('end', function() {
            console.log("Body is" + body);
            var _inputData_ = JSON.parse(body);
            var _contentData_ = JSON.parse(content);

            if (_inputData_ && _inputData_["category"] === "login") {
                if(_contentData_[_inputData_["uname"]]){
                    if(_contentData_[_inputData_["uname"]]["pass"] === _inputData_["pass"]){
                        sucessFlag = true;
                    } else {
                        sucessFlag = false;
                    }
                } else {
                    sucessFlag = false;
                }

                if (sucessFlag) {
                    res.end("success");
                } else {
                    res.end("fail");
                }
            } else if (_inputData_ && _inputData_["category"] === "register") {
                var _updatedData = JSON.stringify(serverApp.processdata(_contentData_, _inputData_));
                fs.writeFileSync(path.resolve('data.json'), _updatedData);
            }

        });

    } else {
        console.log("Inside Get Request...!!!");
    }

});

httpServer.listen(5000, 'localhost', function() {
    console.log('Listening in port 5000');
});
