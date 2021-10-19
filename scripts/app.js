// const updateUI = async (music) => {
//     console.log(music.title);
// };
// db.collection('music').get().then(snapshot => {
//     // data
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//         updateUI(doc.data())
//     })
// }).catch(err => {
//     console.log(err);
// });

// reference from the DOM
const library = document.querySelector('aside');
const libraryBtn = document.querySelector('nav button');
const playSong = document.querySelector('aside button');
const play = document.querySelector('aside audio');
const albumCover = document.querySelector('.album_cover');
const artistPreview = document.querySelector('.artist');
const titlePreview = document.querySelector('.title');

playSong.addEventListener('click', () =>{
    play.play();
})

libraryBtn.addEventListener('click', () => {
    library.classList.toggle('active');
});

const updateUI = async (musics) => {
    musics.forEach(music => {
        const { song, title, album_cover, artist, love  } = music.data();
        library.innerHTML += `
            <button class="music">
                <img src=${album_cover} alt="">
                <div class="details">
                    <h3 class="name">${title}</h3>
                    <p class="artist">${artist}</p>
                </div>
                <audio src=${song}></audio>
            </button>
        `;
        const musicsData = document.querySelectorAll('.music');
        const audios = document.querySelectorAll('.music audio');

        musicsData.forEach((musicData, i) => {
            musicData.addEventListener('click', () => {
                audios[i].currentTime = 0;
                audios[i].play();
            });
            albumCover.src = `${album_cover[i]}`;
            artistPreview.textContent = `${artist[i]}`;
            titlePreview.textContent = `${title[i]}`;
        });
    });
}

const getMusic = async () => {
    const response = await db.collection('music').get();
    return response;
}

 getMusic()
     .then(snapshot => updateUI(snapshot.docs))
     .catch(err => console.log(err));
