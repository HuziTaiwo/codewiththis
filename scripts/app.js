// db.collection('music').get().then(snapshot => {
//     // data
//     snapshot.docs.forEach(doc => {
//         console.log(doc.data());
//     })
// }).catch(err => {
//     console.log(err);
// });

// reference from the DOM
const library = document.querySelector('aside');
const libraryBtn = document.querySelector('nav button');

libraryBtn.addEventListener('click', () => {
    library.classList.toggle('active');
});