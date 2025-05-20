const average = document.getElementById('average')
const memory = document.getElementById('memory')
const memoryImg = memory.querySelector('img')
const memoryScore = document.getElementById('memory-score')
const memoryText = document.getElementById('memory-text')

const reaction = document.getElementById('reaction')
const reactionImg = reaction.querySelector('img')
const reactionScore = document.getElementById('reaction-score')
const reactionText = document.getElementById('reaction-text')

const visual = document.getElementById('visual')
const visualImg = visual.querySelector('img')
const visualScore = document.getElementById('visual-score')
const visualText = document.getElementById('visual-text')

const verbal = document.getElementById('verbal')
const verbalImg = verbal.querySelector('img')
const verbalScore = document.getElementById('verbal-score')
const verbalText = document.getElementById('verbal-text')

const data = await fetch('./data.json')
.then(res => res.json())
.then(data => {
    return data
})

const reactionData = data[0]
const memoryData = data[1]
const verbalData = data[2]
const visualData = data[3]


reactionText.innerHTML = reactionData.category
reactionImg.src = reactionData.icon
reactionScore.textContent = reactionData.score

memoryText.innerHTML = memoryData.category
memoryImg.src = memoryData.icon
memoryScore.textContent = memoryData.score

verbalText.innerHTML = verbalData.category
verbalImg.src = verbalData.icon
verbalScore.textContent = verbalData.score

visualText.innerHTML = visualData.category
visualImg.src = visualData.icon
visualScore.textContent = visualData.score

average.textContent = Math.floor((reactionData.score + memoryData.score + verbalData.score + visualData.score)/data.length)