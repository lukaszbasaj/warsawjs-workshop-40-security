(() => {
    const fetchComments = async () => {
        const response = await fetch(
            '/comments',
            {
                method: 'GET'
            }
        );
        return await response.json()
    };

    const renderComment = (comment) => {
        const $commentsList = document.querySelector('.comments');
        $commentsList.innerHTML += `<li>${comment}</li>`
    };

    const renderComments = (comments) => {
        comments.forEach(renderComment);
    };

    const saveComment = async (comment) => {
        await fetch(
            '/comments',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({comment})
            }
        );
        renderComment(comment);
    };

    const main = async () => {
        const $addCommentForm = document.querySelector('form');
        $addCommentForm.addEventListener('submit', ($event) => {
            $event.preventDefault();
            const comment = document.querySelector('textarea').value;
            saveComment(comment);
        });
        const comments = await fetchComments();
        renderComments(comments);
    };

    window.addEventListener('DOMContentLoaded', main);
})();