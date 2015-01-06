var home = {
    getHomeLinks: function(index){
        // This function is used to get the Links inside the Home page.
        var childrens = document.getElementsByClassName("home_link");
        return childrens[index];
    },
    addLogoutEvent: function(){
        var elem = this.getHomeLinks(0); // 0 is passed as index for Logout button
        elem.addEventListener('click',function(){
            location.href = "index.html";
        });
    },
    addCreateDefectEvent: function(){
        var elem = this.getHomeLinks(1);
        elem.addEventListener('click',function(){
            var popupElem = document.getElementById("popup");
            util.show(popupElem);
        });
    },
    addCloseEvent: function() {
        document.getElementById("closeBtn").addEventListener('click', function() {
            util.hide(popup);
        });
    },
    clearData: function(){
        document.getElementById('data').innerHTML = "";
    },
    addUsersEvent: function(){
        document.getElementById("users").addEventListener('click',function(){
            home.clearData(); // Clearing the Data to add the new fresh data.
            
            var param = {
                "category": "users"
            };
            var _userCallBack = function(responseText) {
                if(responseText){
                    var usersData = JSON.parse(responseText);
                    var htmlStr = "<table><tr><th>ID</th><th>Username</th><th>Name</th><th>Client</th><th>Project</th><th>Type</th><th>Creation Date</th><th>Last Login</th><th>Assigned Defects</th><th>Closed Defects</th></tr>"; // Table and Header 
                    
                    if(usersData && Object.keys(usersData).length >0){
                        var totalKeys = Object.keys(usersData);
                        for(var i=0; i<totalKeys.length; i++){
                            var singleData = "<tr>";
                            singleData += "<td>"+usersData[totalKeys[i]].id+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].uname+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].name+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].client+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].project+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].type+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].creationdate+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].lastlogin+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].assigneddefects+"</td>";
                            singleData += "<td>"+usersData[totalKeys[i]].closeddefects+"</td>";
                            singleData += "</tr>";
                            
                            htmlStr += singleData;
                        }
                        htmlStr += "</table>";
                    }
                    document.getElementById("data").innerHTML = htmlStr;
                }
            }
            util.sendPostRequest(param, _userCallBack);
        });
    },
    addClientsEvent: function(){
        document.getElementById('clients').addEventListener('click',function(){
            home.clearData(); // Clear the data to add new fresh data.
            
            var param = {
                "category": "clients"
            };
            var _clientsCallBack = function(responseText) {
                if(responseText){
                    var clientsData = JSON.parse(responseText);
                    var htmlStr = "<table><tr><th>ID</th><th>Name</th><th>List of Projects</th></tr>"; // Table and Header 
                    
                    if(clientsData && Object.keys(clientsData).length >0){
                        var totalKeys = Object.keys(clientsData);
                        for(var i=0; i<totalKeys.length; i++){
                            var singleData = "<tr>";
                            singleData += "<td>"+clientsData[totalKeys[i]].id+"</td>";
                            singleData += "<td>"+clientsData[totalKeys[i]].name+"</td>";
                            singleData += "<td>"+clientsData[totalKeys[i]].listofprojects+"</td>";
                            singleData += "</tr>";
                            
                            htmlStr += singleData;
                        }
                        htmlStr += "</table>";
                    }
                    document.getElementById("data").innerHTML = htmlStr;
                }
            }
            util.sendPostRequest(param, _clientsCallBack);
        });
    },
    addProjectsEvent: function(){
        document.getElementById('projects').addEventListener('click',function(){
            home.clearData(); // Clear the data to add new fresh data.
            
            var param = {
                "category": "projects"
            };
            var _projectsCallBack = function(responseText) {
                if(responseText){
                    var projectsData = JSON.parse(responseText);
                    var htmlStr = "<table><tr><th>ID</th><th>Name</th><th>Client</th><th>Date of Creation</th><th>Resources</th><th>Defects</th><th>Manager</th><th>Location</th></tr>"; // Table and Header 
                    
                    if(projectsData && Object.keys(projectsData).length >0){
                        var totalKeys = Object.keys(projectsData);
                        for(var i=0; i<totalKeys.length; i++){
                            var singleData = "<tr>";
                            singleData += "<td>"+projectsData[totalKeys[i]].id+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].name+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].client+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].dateofcreation+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].resources+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].defects+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].manager+"</td>";
                            singleData += "<td>"+projectsData[totalKeys[i]].location+"</td>";
                            singleData += "</tr>";
                            
                            htmlStr += singleData;
                        }
                        htmlStr += "</table>";
                    }
                    document.getElementById("data").innerHTML = htmlStr;
                }
            }
            util.sendPostRequest(param, _projectsCallBack);
        });
    },
    addDefectsEvent: function(){
        document.getElementById('defects').addEventListener('click',function(){
            home.clearData(); // Clear the data to add new fresh data.
            alert('Defect');
        });;
    },
    init: function(){
        // Init function is used for adding all the Event Handler functions.
        this.addLogoutEvent(); // Adding the event handler function for Logout Link.
        this.addCreateDefectEvent(); // Adding event handler function for create defect link.
        this.addUsersEvent(); // Adding event handler function for Users Link.
        this.addClientsEvent(); // Adding event handler function for Clients Link.
        this.addProjectsEvent(); // Adding event handler function for Projects Link.
        this.addDefectsEvent(); // Adding event handler function for Defects Link.
        this.addCloseEvent(); // Adding Event handler function for close image.
    }
}

home.init();