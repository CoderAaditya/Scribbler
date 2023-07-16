// Add event listener to delete icons
const deleteIcons = document.querySelectorAll('.delete-icon');
const modal = document.getElementById('delete-modal');
const modalNo = document.getElementById('modal-no');
const modalYes = document.getElementById('modal-yes');

let postToDelete;

deleteIcons.forEach((icon) => {
    icon.addEventListener('click', (event) => {
        postToDelete = event.target.closest('.post-card');
        modal.style.display = 'block';
    });
});

modalNo.addEventListener('click', () => {
    modal.style.display = 'none';
});

modalYes.addEventListener('click', () => {
    modal.style.display = 'none';
    if (postToDelete) {
        postToDelete.remove();
    }
});

const ellipsisLinks = document.querySelectorAll('.ellipsis-link');

ellipsisLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const postCard = event.target.closest('.post-card');
    const postAuthor = postCard.querySelector('.post-author p').innerText;
    const postTitle = postCard.querySelector('.post-title').innerText;
    const postText = postCard.querySelector('.post-text').innerText;

    localStorage.setItem('postAuthor', postAuthor);
    localStorage.setItem('postTitle', postTitle);
    localStorage.setItem('postText', postText);
  });
});
