const tpl = document.createElement("template")
tpl.innerHTML = `
    <style>
            :host {
                display: block;
                background-color: #333333;
                color: #FFFFFF;
                padding: 1em;
                margin: 1em;
            }

            h2 {
                color: greenyellow;
            }
    </style>

        <slot name="titulo">
            <h2>Título Padrão</h2> <!-- valor padrao utilizado quando o slot estiver vazio -->
        </slot>
        <p>Aqui vai o conteúdo do elemento:</p>
        <slot></slot>
`

class HelloWorldElement extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: "open" })
        this.shadowRoot.append(tpl.content.cloneNode(true))
    }
}

customElements.define("hello-world", HelloWorldElement)