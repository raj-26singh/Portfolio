/* ------------------------ Typing Animation ---------------------- */
var typed = new Typed(".typing",{
    strings:["Reservoir Engineer...","Data Science Enthusiast...","Tech. Enthusiast...","Problem Solver..."],
    typeSpeed:160,
    BackSpeed:150,
    loop:true
})
// Active Toggle
var navLinks = document.querySelectorAll(".aside .nav li a");
function setHomeActive() {
    removeActiveClass(); // Remove active class from all links
    navLinks[0].classList.add("active"); // Add active class to Home
}
// Add click event listener to each link
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
    // Remove active class from all links
    navLinks.forEach(function(l) {
        l.classList.remove("active");
    });

    // Add active class to the clicked link
    this.classList.add("active");
    });
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');

    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 50) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });

var sendEmailButton = document.getElementById("sendEmailButton");

// Add click event listener to the button
sendEmailButton.addEventListener("click", function() {
    // Call the sendEmail function
    sendEmail();
});

// Function to send email
function sendEmail() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var subject = document.getElementById("subjectInput").value;
    var message = document.getElementById("messageInput").value;

    var to = "raj26.ksingh2000@gmail.com";

    var body = "Name: " + name + "\n";
    body += "Email: " + email + "\n";
    body += "Subject: " + subject + "\n";
    body += "Message: " + message;

    var mailtoUrl = "mailto:" + encodeURIComponent(to) + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    window.location.href = mailtoUrl;
}