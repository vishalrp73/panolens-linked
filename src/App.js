import './App.css';
import * as PANOLENS from 'panolens';
import * as THREE from 'three';

function App() {

  const pano01 = '/assets/pano01.jpg';
  const pano02 = '/assets/pano02.jpg';
  const pano03 = '/assets/pano03.jpg';
  const pano04 = '/assets/pano04.jpg';


  const panorama = new PANOLENS.ImagePanorama(pano01);
  const panorama2 = new PANOLENS.ImagePanorama(pano02);
  const panorama3 = new PANOLENS.ImagePanorama(pano03);
  const panorama4 = new PANOLENS.ImagePanorama(pano04);

  panorama.link(panorama2, new THREE.Vector3( 902.98, 358.27, -414.74 ));
  panorama2.link(panorama, new THREE.Vector3( 9502.98, 1058.27, -414.74 ));
  panorama2.link(panorama3, new THREE.Vector3( -1856.98, 414.79, -414.56 ));
  panorama3.link(panorama2, new THREE.Vector3( 1856.98, 414.79, -414.56 ));
  panorama3.link(panorama4, new THREE.Vector3( -1856.98, 414.79, -414.56 ));
  panorama4.link(panorama3, new THREE.Vector3( 2156.98, 414.79, -414.56 ))

  const viewer = new PANOLENS.Viewer({
    container: document.querySelector('#App')
  });
  viewer.add(panorama, panorama2, panorama3, panorama4);

  return (
    <div className="App">
    </div>
  );
}

export default App;