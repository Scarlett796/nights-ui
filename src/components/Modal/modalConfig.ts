import { Options } from "./types";
let modalNode: HTMLDivElement;
class _ModalConfig {
  initable = false;
  theme = "default";

  init(
    options: Options = {
      theme: "default",
    }
  ) {
    console.log(11)
    modalNode = document.createElement("div");
    modalNode.id = `modal-${_getId()}`;
    modalNode.className = "nice-modal-root";
    document.body.appendChild(modalNode);
    this.initable = true;
    this.theme = options.theme;
  }
}

function _getId() {
  return Math.random().toFixed(6).split(".")[1];
}
let ModalConfig = new _ModalConfig();
ModalConfig.init();
export { ModalConfig, modalNode };
