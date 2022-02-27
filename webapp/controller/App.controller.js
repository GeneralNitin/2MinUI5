sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    return Controller.extend("sap.ui.demo.controller.App", {
        incrementBy1: function() {
            let myTextElem = this.getView().byId("counter");
            let myNum = parseInt(myTextElem.getText());
            myNum += 1;
            myTextElem.setText(myNum);
        }
    })
});