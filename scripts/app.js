
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

const updateUI = async (musics) => {
    console.log(musics);
}

const getMusic = async () => {
    const response = await db.collection('music').get();
    return response;
}

// getMusic()
//     .then(snapshot => updateUI(snapshot.docs))
//     .catch(err => console.log(err));

// reference from the DOM
const library = document.querySelector('aside');
const libraryBtn = document.querySelector('nav button');

libraryBtn.addEventListener('click', () => {
    library.classList.toggle('active');
});