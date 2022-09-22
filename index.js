
const filmName = document.querySelectorAll('h3')
const listItem = document.querySelectorAll('aside li')
const aside = document.querySelector('aside')
const section = document.querySelectorAll('section')

const image = document.querySelectorAll('img')

// console.log('1', listItem);
// console.log('2', section);
// console.log('3', aside);
// console.log('4', filmName);
// console.log('5', image);



aside.addEventListener('click', (event) => {
  console.log(event);

  filmName.forEach(el => {
    // console.log('el content', el.textContent);
    // console.log('event content', event.target.textContent);
    if (el.textContent === event.target.textContent) {

      el.parentElement.classList.toggle('active')
      event.target.classList.toggle('selected')
    }
  })
})
