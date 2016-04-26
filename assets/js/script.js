$(document).ready(function() {
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".btn-buyticket").css('background-color', '#ffffff');
            }
        });
    }
});

$(document).ready(

    function() {

        var modalAction;
        
        var body = $('body#page-top').get(0);
        var header = $('nav#mainNav').get(0);
        var modal = $('#modal-cconduta').get(0);
        var modalsBtn = $('.modalTrigger');


        var btn = $('#code-of-conduct')

        // Get the element that closes the modal
        var close = $(".close");

        // When the user clicks on the button, open the modal
        
        modalsBtn.click(function () {
           var modalName = $(this).attr('data-modal');
           
           modalAction = $('#' + modalName).get(0);
           body.style.overflow = "hidden";
           modalAction.style.display = "block";
           header.style.display = "none";
        });
        
        btn.click(function() {
            body.style.overflow = "hidden";
            modal.style.display = "block";
            header.style.display = "none";

        });
        // When the user clicks on (x), close the modal
        close.click(function() {
            body.style.overflow = "initial";
            modal.style.display = "none";
            header.style.display = "block";
            if (modalAction) {
                modalAction.style.display = "none";
            }
        });
    }
)

$(window).load(function() {
  var speed = 8;
  var particles = [];
  var header = $('header#home');
  var w = header.width();
  var h = header.height();
  
  var camera = new THREE.PerspectiveCamera(85, w / h, 1, 4000);
  var scene = new THREE.Scene();
  camera.position.z = 1000;
  scene.add(camera);
  var renderer = new THREE.CanvasRenderer();
  renderer.setClearColor( 0x202020, 1 );
  renderer.setSize(w, h);
  header.append(renderer.domElement);
  
  createParticles();
  update();

  function createParticles() {
    var particle, material;
    for (var zpos = -1000; zpos < 1000; zpos += 5) {
      material = new THREE.ParticleCanvasMaterial({
        color: 0xF7E4BE,
        program: function(c){
          c.beginPath();
          c.arc(0, 0, .8, 0, Math.PI * 2, true);
          c.fill();
        }
      });
      particle = new THREE.Particle(material);
      particle.position.x = Math.random() * 1000 - 500;
      particle.position.y = Math.random() * 1000 - 500;
      particle.position.z = zpos;
      particle.scale.x = particle.scale.y = 1;
      scene.add(particle);
      particles.push(particle);
    }
  }
  
  function update() {
    requestAnimationFrame( update);  
    for (var i = 0; i < particles.length; i++) {
      particle = particles[i];
      particle.position.z += speed;
      if (particle.position.z > 1000) particle.position.z -= 2000;
        }
    renderer.render(scene, camera);
  }
  
});

if (!window.requestAnimationFrame ) {
	window.requestAnimationFrame = ( function() {
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback, element ) {
			window.setTimeout( callback, 1000 / 60 );
		};
	})();
}
