sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    return Controller.extend("sap.ui.demo.controller.App", {
        incrementBy1: function() {
            let myTextElem = this.getView().byId("counter");
            let myNum = parseInt(myTextElem.getText());
            myNum += 1;
            myTextElem.setText(myNum);
        },

        /**
         * @override
         */
        onInit: function() {
            let oModel = new JSONModel(
                sap.ui.require.toUrl("sap/ui/demo/Data.json")
            );
            this.getView().setModel(oModel);
        }
    })
});