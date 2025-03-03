// Works with whats happening in the particular view rather than what's happening in the entire app
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
        
    });
});