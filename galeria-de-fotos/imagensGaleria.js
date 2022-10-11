const tpl = document.createElement("template")
tpl.innerHTML = `
<slot name="title"></slot>
<div class="controls">
    <span id="current">Foto 1 de 6</span>
    <button>Anterior</button>
    <button>Próximo</button>
</div>

<slot id="imgs"></slot>
`

class ImgGalleryElement extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: "open" })
        this.shadowRoot.append(tpl.content.cloneNode(true))

        this.selectedIdx = 0
        const imgsEl = this.shadowRoot.getElementById("imgs")
        const imgs = imgsEl.assignedNodes().filter(e => e.nodeName === "IMG") // nessário para "pegar" as imagens
        console.log(imgs)

        const currentEl = this.shadowRoot.getElementById("current")
        currentEl.textContent = `Foto ${this.selectedIdx + 1} de ${imgs.length}`

        for(let i = 0; i < imgs.length; i++) {
            const img = imgs[i]
            img.style.display = this.selectedIdx === i ? "initial" : "none"
        }
    }
}

customElements.define("img-galeria", ImgGalleryElement)