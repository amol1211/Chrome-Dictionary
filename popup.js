document.getElementById("searchBtn").addEventListener("click", () => {
  const word = document.getElementById("wordInput").value.trim();
  if (word) {
    fetchDefinition(word);
  }
});

function fetchDefinition(word) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Extracting the first definition of the word
      if (
        data &&
        data[0] &&
        data[0].meanings &&
        data[0].meanings[0] &&
        data[0].meanings[0].definitions &&
        data[0].meanings[0].definitions[0]
      ) {
        const meaning = data[0].meanings[0].definitions[0].definition;
        document.getElementById("definition").innerText = meaning;
      } else {
        document.getElementById("definition").innerText =
          "No definition found.";
      }
    })
    .catch((error) => {
      document.getElementById("definition").innerText =
        "Error fetching definition.";
      console.error("Error:", error);
    });
}

/*document.getElementById('searchBtn').addEventListener('click', () => {
  const word = document.getElementById('wordInput').value.trim();
  if (word) {
    fetchDefinition(word);
  }
});

function fetchDefinition(word) {
  const apiKey = 'YOUR_API_KEY'; // Replace with your dictionary API key
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const meaning = data[0].meanings[0].definitions[0].definition;
      document.getElementById('definition').innerText = meaning;
    })
    .catch(error => {
      document.getElementById('definition').innerText = 'Error fetching definition.';
      console.error('Error:', error);
    });
}
*/
