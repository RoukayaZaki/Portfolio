const urlParams = new URLSearchParams(window.location.search);

fetch(`https://fwd.innopolis.university/api/hw2?email=r.mohammed@innopolis.university`)
    .then(response => response.text())
    .then(data => {
        const comicId = data.trim();

        fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`)
            .then(response => response.json())
            .then(comic => {
                const comicImage = document.getElementById('xkcd-comic-image');
                const comicTitle = document.getElementById('xkcd-comic-title');
                const comicDate = document.getElementById('xkcd-comic-date');

                comicImage.src = comic.img;
                comicImage.alt = comic.alt;
                comicTitle.textContent = comic.safe_title;
                comicDate.textContent = new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString();
            })
            .catch(error => {
                console.log('Error fetching comic:', error);
            });
    })
    .catch(error => {
        console.log('Error fetching comic ID:', error);
    });
