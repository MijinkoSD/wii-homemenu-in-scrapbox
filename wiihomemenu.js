const CSS_DIR = "./common.css"
const HOME_BUTTON = "d"

let shadowParent = document.createElement("div")
shadowParent.classList.add("wiihomemenu")
shadowParent.style = "position: absolute; width: 100%; height: 100%; top: 0; left: 0;"
document.body.appendChild(shadowParent)
const shadow = shadowParent.attachShadow({mode: 'open'})
const whmRoot = document.createElement("div")
whmRoot.classList.add("whm-root")
shadow.appendChild(whmRoot)
init()

function init() {
	let link = document.createElement("link")
	link.rel = "stylesheet"
	link.href = CSS_DIR
	shadow.appendChild(link)
}

function on() {
	let div = document.createElement('div')
	div.classList.add("whm-content")
	whmRoot.appendChild(div)
}

function off() {
	while(whmRoot.firstChild) whmRoot.firstChild.remove()
}

function keyEvent(e) {
	if(!e.ctrlKey || e.key != HOME_BUTTON || e.repeat) return
	console.log("入力されました")
	if(whmRoot.firstChild){
		off()
	}else{
		on()
	}
}

document.addEventListener('keydown', keyEvent)
