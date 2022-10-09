class MeuRelogioElement extends HTMLElement {
    constructor() {
        super()
        console.log("constructor") //o constructor é chamado só uma vez, quando o elemento é construído
        this.attachShadow({ mode: "open" })
        this.spanEl = document.createElement("span")
        this.spanEl.textContent = getHMS()
        this.shadowRoot.append(this.spanEl)
    }
    
    connectedCallback() {
        this.spanEl.textContent = getHMS()
        this.timer = setInterval(() => {            
            this.spanEl.textContent = getHMS()
        }, 1000)        
    }

    disconnectedCallback() {
        clearInterval(this.timer)
    }
}

function getHMS() {
    const dh = new Date()
    const h = formatNumber(dh.getHours())
    const m = formatNumber(dh.getMinutes())
    const s = formatNumber(dh.getSeconds())
    return `${h}:${m}:${s}`
}

function formatNumber(n) {
    return String(n).padStart(2, "0")
}

customElements.define("meu-relogio", MeuRelogioElement)