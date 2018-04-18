SandwichModel = Backbone.Model.extend({
    defaults: {
        bread: "wheat"
    },

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        this.on("change:bread", function(model) {
            let new_bread = model.get("bread");
            alert("The bread changed to -> " + new_bread);
      });
    }
});

SandwichView = Backbone.View.extend({
    tagName: "p",
    className: "paragraph",
    id: "bread-paragraph",

    initialize: function() {
        $("#main-div").append(this.el);
    }
});

$(document).ready(function() {
    let first_sandwich = new SandwichModel();
    let sandwich_view = new SandwichView();
    first_sandwich.set({bread: "pumpernickle"});
});
