// join buttons
if (document.querySelector(".join")) {
	const joinButtons = document.querySelectorAll("[data-txt]")
	const joinButtonsSelected = []
	const joinButtonsSend = document.querySelector(".join button")
	const joinOutput = document.querySelector(".join p")

	const random = Math.floor(Math.random() * joinButtons.length)

	joinButtons[random].className = "selected"
	joinOutput.textContent = joinButtons[random].dataset.txt

	for (let i = 0, length = joinButtons.length; i < length; i++) {
		joinButtons[i].addEventListener("click", function () {
			for (let k = 0; k < length; k++) {
				joinButtons[k].className = ""
			}
			this.className = "selected"
			joinButtonsSelected[0] = this.dataset.txt
			joinButtonsSelected[1] = this.dataset.link
			joinOutput.textContent = joinButtonsSelected[0]
		})
	}
	joinButtonsSend.addEventListener("click", () => {
		window.open(joinButtonsSelected[1], "_blank").focus()
	})
}
