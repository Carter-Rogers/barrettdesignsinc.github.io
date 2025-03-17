(function() {
    emailjs.init({
      publicKey: "6XPv_li1jERMhinTb",
    });
  })();

  
const btn = document.getElementById('fSubmit');

document.getElementById('project_inquiry_form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'service_kz1punq';
const templateID = 'template_qj2727f';
const publicKey = '6XPv_li1jERMhinTb';

emailjs.sendForm(serviceID, templateID, form, publicKey)
.then(() => {
  btn.value = 'Send Email';
  alert('Sent!');
}, (err) => {
  btn.value = 'Send Email';
  alert(JSON.stringify(err));
});
});