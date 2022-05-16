var ativo = document.getElementsByClassName("active");

let inicioMark = document.getElementById("inicioMark");
let sobremimMark = document.getElementById("sobremimMark");
let portfolioMark = document.getElementById("portfolioMark");
let contatoMark = document.getElementById("contatoMark");

let mostradorAtivo = document.getElementById("mostrador-ativo");


class ClassWatcher {

    constructor(targetNode, classToWatch, display ) {
        this.targetNode = targetNode
        this.classToWatch = classToWatch
        this.display = display
        this.observer = null
        this.lastClassState = targetNode.classList.contains(this.classToWatch)

        this.init()
    }

    init() {
        this.observer = new MutationObserver(this.mutationCallback)
        this.observe()
    }

    observe() {
        this.observer.observe(this.targetNode, { attributes: true })
    }

    disconnect() {
        this.observer.disconnect()
    }

    mutationCallback = mutationsList => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let currentClassState = mutation.target.classList.contains(this.classToWatch)
                if(this.lastClassState !== currentClassState) {
                    this.lastClassState = currentClassState
                    if(currentClassState) {
                        this.display.innerHTML=this.targetNode.text
                    }
                }
            }
        }
    }
}

let classWatcherInicio = new ClassWatcher(inicioMark, "active", mostradorAtivo)
let classWatcherSobreMim = new ClassWatcher(sobremimMark, "active", mostradorAtivo)
let classWatcherPortfolio = new ClassWatcher(portfolioMark, "active", mostradorAtivo)
let classWatcherContato = new ClassWatcher(contatoMark, "active", mostradorAtivo)

