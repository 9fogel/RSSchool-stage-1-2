class Winners {
  public render() {
    const main: HTMLElement | null = document.querySelector('.main');
    if (main) {
      main.innerHTML += this.renderMain();
    }
  }

  private renderMain() {
    const mainContent = `<div class="winners-wrapper hidden">
    <h2 class="page-title">Winners</h2>
  </div>`;

    return mainContent;
  }
}

export default Winners;