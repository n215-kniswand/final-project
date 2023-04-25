import { homeContent } from "../model/model.js";

function initListerners() {

    $("nav a").on("click", function (e) {
        let btnID = e.currentTarget.id;
        let pageContentId = btnID + "Content";
        changePageContent(pageContentId);
    });
}

function changePageContent(pageContentIdVarName){
    $("#app").html(eval(pageContentIdVarName));
}

$(document).ready(function () {
    changePageContent('homeContent');
    initListerners();
});

