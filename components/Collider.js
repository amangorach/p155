// Registering component in Collider.js
AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `hurdle${i}`;

      //position variables
      var posX = Math.random() * 30 + -10;
      var posY = Math.random() * 2 + -1;
      var posZ = Math.random() * 30 + -10;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    //Get the terrain element
    var terrainEl = document.querySelector("#terrain");

    //creating the bird model entity
    var birdEl = document.createElement("a-entity");

    //Setting multiple attributes
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 0.15, y: 0.15, z: 0.15 });

    //set the gLTF model attribute
    birdEl.setAttribute("gltf-model", "./assets/guppy_fish/scene.gltf");

    //set animation mixer of models with animation
    birdEl.setAttribute("animation-mixer", {});
    birdEl.setAttribute("static-body", {shape:"sphere", sphereRadius:5});
    birdEl.setAttribute("game-play",{elementId:`#${id}`})
    
    //append the bird entity as the child of the terrain entity
    terrainEl.appendChild(birdEl);
  },
});
