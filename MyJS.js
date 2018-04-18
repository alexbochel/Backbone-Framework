WebsiteModel = Backbone.Model.extend({
    initialize: function() {
        alert("Hi father");
    }
});

$(document).ready(function() {
    let page_model = new WebsiteModel();
});
