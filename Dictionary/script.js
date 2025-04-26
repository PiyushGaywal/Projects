const input = document.getElementById("box")
const btn1 = document.querySelector(".btn")
const btn2 = document.querySelector(".btn1")
const result = document.querySelector(".result")

async function getdata(word) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json()
    return data   
}

btn1.addEventListener("click", async () => {
    const data = await getdata(input.value)

    if (!data || data.title === "No Definitions Found") {
        result.innerHTML = `<p>No Definition Found</p>`
        return
    }

    let definition = data[0].meanings[0].definitions[0]
    let partOfSpeech = data[0].meanings[0] ? data[0].meanings[1].partOfSpeech : "Not available"
    
    let synonyms = data[0].meanings[2] && data[0].meanings[2].synonyms.length > 0 ? data[0].meanings[2].synonyms[1] : "None"
    let antonyms = data[0].meanings[2] && data[0].meanings[2].antonyms.length > 0 ? data[0].meanings[2].antonyms[1] : "None"

    result.innerHTML = `<h2>Word: ${data[0].word}</h2>
    <p>Part Of Speech: ${partOfSpeech}</p>
    <p>Meaning: ${definition.definition}</p>
    <p>Synonyms: ${synonyms}</p>
    <p>Antonyms: ${antonyms}</p>`
})

btn2.addEventListener("click", () => {
    if (input.value === "") {
        alert("Enter The Word First")
    } else {
        let word = input.value
        window.location.href = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    }
})
