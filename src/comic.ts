import { formatDistanceToNow } from 'date-fns';

interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const urlParams = new URLSearchParams(window.location.search);

fetch('https://fwd.innopolis.university/api/hw2?email=r.mohammed@innopolis.university')
  .then((response: Response) => response.text())
  .then((data: string) => {
    const comicId: number = parseInt(data.trim(), 10);

    fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`)
      .then((response: Response) => response.json())
      .then((comic: Comic) => {
        const comicImage = document.getElementById('xkcd-comic-image') as HTMLImageElement;
        const comicTitle = document.getElementById('xkcd-comic-title') as HTMLHeadingElement;
        const comicDate = document.getElementById('xkcd-comic-date') as HTMLParagraphElement;
        const releaseDate = new Date(parseInt(comic.year, 10), parseInt(comic.month, 10) - 1, parseInt(comic.day, 10));

        comicImage.src = comic.img || './../assets/No-Image-Placeholder.svg';
        comicImage.alt = comic.alt;
        comicTitle.textContent = comic.safe_title;

        const timeAgo = formatDistanceToNow(releaseDate);
        comicDate.textContent = `Released ${timeAgo} ago`;
      })
      .catch((error: Error) => {
        console.log('Error fetching comic:', error);
      });
  })
  .catch((error: Error) => {
    console.log('Error fetching comic ID:', error);
  });
