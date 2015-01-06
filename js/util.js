// Utility used for Common Functionalities...

var util = {
    hide: function(elem) {
        elem.style.display = "none";
    },
    show: function(elem) {
        elem.style.display = "block";
    },
    sendPostRequest: function(data, _callBack) {
        var URL = "http://localhost:5000",
            httpReq = new XMLHttpRequest(),
            dataStr = JSON.stringify(data);

        httpReq.onreadystatechange = function() {
            if (httpReq.readyState === 4 && httpReq.status === 200) {
                _callBack(httpReq.responseText);
            }
        };

        httpReq.open("POST", URL, true);
        httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        httpReq.send(dataStr);
    },
    sendGetRequest: function(_callBack){
        var URL = "http://localhost:5000",
            httpReq = new XMLHttpRequest();

        httpReq.onreadystatechange = function() {
            if (httpReq.readyState === 4 && httpReq.status === 200) {
                _callBack(httpReq.responseText);
            }
        };

        httpReq.open("GET", URL, true);
        httpReq.send();
    },
    init: function() {
        //alert('Inside Init');
    }
}