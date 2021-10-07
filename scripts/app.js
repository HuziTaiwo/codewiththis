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
            <button>
                <img src=${album_cover} alt="">
                <div class="details">
                    <h3 class="name">${title}</h3>
                    <p class="artist">${artist}</p>
                </div>
                <audio src=${song}></audio>
            </button>
        `;
    });
}

const getMusic = async () => {
    const response = await db.collection('music').get();
    return response;
}

getMusic()
    .then(snapshot => updateUI(snapshot.docs))
    .catch(err => console.log(err));