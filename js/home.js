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
    init: function(){
        // Init function is used for adding all the Event Handler functions.
        this.addLogoutEvent(); // Adding the event handler function for Logout Link.
        this.addCreateDefectEvent(); // Adding event handler function for create defect link.
        this.addCloseEvent(); // Adding Event handler function for close image.
    }
}

home.init();