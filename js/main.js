$(document).ready(function(){
  //slider
  if(window.location.href.indexOf('index')>-1){
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1000,
      responsive:true,
      pager:false
    });
  }

  //post
  if(window.location.href.indexOf('index')>-1){
    var posts=[
      {
        title:"Prueba de titulo 1",
        date: "Publicado "+ moment().format("MMMM dddd, YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus eu risus tristique, vel lacinia quam blandit. Suspendisse efficitur ligula vel vehicula pellentesque. Cras nunc mauris, pretium vitae blandit in, rutrum in neque. Mauris tortor purus, accumsan quis erat ut, dignissim consectetur nulla. Etiam dapibus enim a imperdiet pellentesque. Vestibulum egestas vitae lorem ac consequat. Fusce id metus non leo pharetra porta id nec neque. Quisque eu lacus diam."
      },
      {
        title:"Prueba de titulo 2",
        date: "Publicado "+ moment().format("MMMM dddd, YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus eu risus tristique, vel lacinia quam blandit. Suspendisse efficitur ligula vel vehicula pellentesque. Cras nunc mauris, pretium vitae blandit in, rutrum in neque. Mauris tortor purus, accumsan quis erat ut, dignissim consectetur nulla. Etiam dapibus enim a imperdiet pellentesque. Vestibulum egestas vitae lorem ac consequat. Fusce id metus non leo pharetra porta id nec neque. Quisque eu lacus diam."
      },
      {
        title:"Prueba de titulo 3",
        date: "Publicado "+ moment().format("MMMM dddd, YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus eu risus tristique, vel lacinia quam blandit. Suspendisse efficitur ligula vel vehicula pellentesque. Cras nunc mauris, pretium vitae blandit in, rutrum in neque. Mauris tortor purus, accumsan quis erat ut, dignissim consectetur nulla. Etiam dapibus enim a imperdiet pellentesque. Vestibulum egestas vitae lorem ac consequat. Fusce id metus non leo pharetra porta id nec neque. Quisque eu lacus diam."
      },
      {
        title:"Prueba de titulo 4",
        date: "Publicado "+ moment().format("MMMM dddd, YYYY"),
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis risus eu risus tristique, vel lacinia quam blandit. Suspendisse efficitur ligula vel vehicula pellentesque. Cras nunc mauris, pretium vitae blandit in, rutrum in neque. Mauris tortor purus, accumsan quis erat ut, dignissim consectetur nulla. Etiam dapibus enim a imperdiet pellentesque. Vestibulum egestas vitae lorem ac consequat. Fusce id metus non leo pharetra porta id nec neque. Quisque eu lacus diam."
      }
    ];

    posts.forEach((item,index) => {
      var post=`
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
          ${(item.content)}
        </p>
        <a href="#" class="button-more">Leer más</a>
      </article>
      `;

      $("#posts").append(post);
    });
  };
  //Selector de tema
  var theme=$("#theme");
  $("#to-green").click(function(){
    theme.attr("href","css/green.css")
  });
  $("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
  });
  $("#to-red").click(function(){
    theme.attr("href","css/red.css")
  });
  //Scroll arriba
  $(".subir").click(function(e){
    e.preventDefault
    $('html,body').animate({
      scrollTop:0
    },1000);
    return false;
  });
  //login
  $("#login form").submit(function(){
    location.reload();
    var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}

  	if(window.location.href.indexOf('about') > -1){
  		$("#acordeon").accordion();
  	}

    if(window.location.href.indexOf('reloj') > -1){
      setInterval(function(){
        var reloj=moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
      },1000);

  	}

    //validacion
    if(window.location.href.indexOf('contact') > -1){
      $("form input[name='date']").datepicker({
        dateFormat:"dd-mm-yyyy"
      });
      $.validate({
        lang:'es',
        errorMessagePosition: 'top',
        scrollToTopError:true
      });
    }

})
