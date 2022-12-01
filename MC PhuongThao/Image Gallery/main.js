let listDivImg = document.querySelectorAll('.list-img div')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let imgWrap = document.querySelector('.img-wrap-1 img')
let imgWrap2 = document.querySelector('.img-wrap-2 img')
let imgWrap3 = document.querySelector('.img-wrap-3 img')

let currentIndex = 0

setCurrent(currentIndex)

function setCurrent(index) {
	currentIndex = index
	imgWrap.src = listDivImg[currentIndex].querySelector('img').src
	imgWrap2.src = listDivImg[currentIndex+1].querySelector('img').src
	imgWrap3.src = listDivImg[currentIndex+2].querySelector('img').src

	// remove all active img
	listDivImg.forEach((item) => {
		item.classList.remove('active')
	})

	// set active
	listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		setCurrent(index)
	})
})

next.addEventListener('click', () => {
	if (currentIndex == listDivImg.length - 1) {
		currentIndex = 0
	} else currentIndex++

	setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) currentIndex = listDivImg.length - 1
	else currentIndex--

	setCurrent(currentIndex)
})
