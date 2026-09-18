function readBlog(blogName) {
    alert("You selected: " + blogName);
}

function submitForm(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    event.target.reset();
}