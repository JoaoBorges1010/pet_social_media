import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="modal-handler"
export default class extends Controller {
  static targets = ["modal"];
  connect() {}

  open(e) {
    e.preventDefault();
    this.modalTarget.showModal();

    this.modalTarget.addEventListener("click", (e) => this.backdropClick(e));
  }

  close(e) {
    e.preventDefault();
    this.modalTarget.close();
  }

  backdropClick(event) {
    event.target === this.modalTarget && this.close(event);
  }
}
