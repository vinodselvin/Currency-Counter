// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  root: '#app',
  theme: theme,
  swipePanel: 'left',
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
});

$('.open-left-panel').on('click', function (e) {
    app.openPanel('left');
});
 
$('.open-right-panel').on('click', function (e) {
    app.openPanel('right');
});
 
$('.panel-close').on('click', function (e) {
    app.closePanel();
});

$(document).on("click", ".plus-count, .minus-count", function(e){

  var money_input = $(this).parent().find(".money");

  var value = (money_input.val() == "") ? 0 : money_input.val();

  if($(this).hasClass("plus-count")){

    var added = parseInt(value) + 1

    money_input.val(added);
  }
  else{

    var substracted = parseInt(value) - 1;

    if(substracted <= 0){
      substracted = 0;
    }

    money_input.val(substracted);
  }

  countMoney();
});

$(document).on("keyup", ".money", function(e){
  e.preventDefault();

  countMoney();
});

function countMoney(){
  var total = 0;

  $('.money').each(function(i, obj) {

      var cur_val = ($(obj).val() == "") ? 0 : $(obj).val();

      total += (cur_val * $(obj).data("money"));
  });

  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  $(".money-total").html("Rs. " + total);

  var formData = app.form.toData('#demo-form');
  
  var id = getId();

  if(id == 0){
    setId();
  }

  var id = getId();

  setFormData(id, formData);
  
}

$(document).on('page:init', function (e) {

  var id = 0;

  if(e.detail.route.url.includes("type=resume")){
    
    id = getId();

    var data = localStorage.getItem("formdata");

    data = JSON.parse(data);

    if(data != null){
      data = data[id];
    }

    console.log(data);
  }

  else{
    setId();
  }

});

function getId(){

  var id = localStorage.getItem("id");

  if(id == null){
    id = 0;
  }

  return id;
}

function setId(){

  var id = Date.now();

  localStorage.setItem("id", id);
}

function setFormData(id, result){

  var data = localStorage.getItem("formdata", id);

  if(data == null){
    data = {};
  }
  else{
    data = JSON.parse(data);
  }

  data[id] = result;

  localStorage.setItem("formdata", JSON.stringify(data));
}