var ativo = document.getElementsByClassName("active");

let inicioMark = document.getElementById("inicioMark");
let sobremimMark = document.getElementById("sobremimMark");
let contatoMark = document.getElementById("contatoMark");
let portfolioMark = document.getElementById("portfolioMark");

let teste1Mark = document.getElementById("teste1Mark");

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
                    console.log("chegou aqui1 /n")
                    this.lastClassState = currentClassState
                    if(currentClassState) {
                        console.log("chegou aqui2 /n")
                        this.display.innerText=this.targetNode.text
                    }
                }
            }
        }
    }
}

let classWatcherTeste1 = new ClassWatcher(teste1Mark, "active", mostradorAtivo)
let classWatcherInicio = new ClassWatcher(inicioMark, "active", mostradorAtivo)
let classWatcherSobreMim = new ClassWatcher(sobremimMark, "active", mostradorAtivo)
let classWatcherContato = new ClassWatcher(contatoMark, "active", mostradorAtivo)
let classWatcherPortfolio = new ClassWatcher(portfolioMark, "active", mostradorAtivo)

