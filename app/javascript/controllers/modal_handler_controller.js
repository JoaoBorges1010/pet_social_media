import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="modal-handler"
export default class extends Controller {
  static targets = ["modal"];
  connect() {}

  open(e) {
    e.preventDefault();
    this.modalTarget.showModal();
  }

  closeModal(e) {
    this.modalTarget.close();
  }

  clickOutside(e) {
    if (e.target === this.modalTarget) {
      this.modalTarget.close();
    }
  }
}
