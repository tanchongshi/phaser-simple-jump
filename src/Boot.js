import Phaser from "phaser";
import loadingBarD from '../assets/menu/loadingBarD.png'
import logo from '../assets/menu/logo.png'

class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "Boot"
    });
  }

  preload() {
    this.load.image("logo", logo);
    this.load.image("loadingBar", loadingBarD);
  }

  create() {
    this.scene.start("Preloader");
    this.scene.stop();
  }
}

export default Boot;
