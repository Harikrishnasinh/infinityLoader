// Made with Zdog

// create illo
const illo = new Zdog.Illustration({
    // set canvas with selector
    element: '.zdog-canvas',
    zoom: 4,
    // enable rotating scene with dragging
    dragRotate: true,
  });
  
  let inner = new Zdog.Polygon({
    addTo: illo,
    radius: 30,
    sides: 3,
    stroke: 5,
    color: '#86DCFE',
    rotate: {z: Zdog.TAU/2}
  });
  
  let outter = new Zdog.Polygon({
    addTo: illo,
    radius: 50,
    sides: 3,
    stroke: 5,
    color: '#F6095D',
    rotate: {z: Zdog.TAU/2}
  });
  
  
  
  function animate() {
    illo.rotate.y += 0.01;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  
  animate();