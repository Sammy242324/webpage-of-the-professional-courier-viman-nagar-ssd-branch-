document.querySelectorAll('.card, .features article, .faq-card details, .whatsapp-float').forEach((el) => {
  el.classList.add('reveal');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const openMailDraft = (subjectText, detailLines) => {
  const subject = encodeURIComponent(subjectText);
  const body = encodeURIComponent(detailLines.join('\n'));
  window.location.href = `mailto:ssd@tpcglobe.co.in?subject=${subject}&body=${body}`;
};

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name')?.value.trim() || '';
    const phone = document.querySelector('#phone')?.value.trim() || '';
    const message = document.querySelector('#message')?.value.trim() || '';

    openMailDraft(`Customer Query from ${name || 'Website Visitor'}`, [
      'Source: Contact Page',
      `Name: ${name}`,
      `Phone: ${phone}`,
      '',
      'Query:',
      message,
    ]);
    alert('Your email app has been opened. Please send the drafted query email.');
    contactForm.reset();
  });
}

const proexForm = document.querySelector('#proexForm');
if (proexForm) {
  proexForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#proexName')?.value.trim() || '';
    const phone = document.querySelector('#proexPhone')?.value.trim() || '';
    const email = document.querySelector('#proexEmail')?.value.trim() || '';
    const pickup = document.querySelector('#proexPickup')?.value.trim() || '';
    const destination = document.querySelector('#proexDestination')?.value.trim() || '';
    const parcelType = document.querySelector('#proexParcelType')?.value.trim() || '';
    const weight = document.querySelector('#proexWeight')?.value.trim() || '';
    const message = document.querySelector('#proexMessage')?.value.trim() || '';

    openMailDraft(`Pro EX Query from ${name || 'Website Visitor'}`, [
      'Source: Pro EX Page',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Pickup Location: ${pickup}`,
      `Destination Location: ${destination}`,
      `Parcel Type: ${parcelType}`,
      `Approx Weight: ${weight}`,
      '',
      'Query Details:',
      message,
    ]);
    alert('Your email app has been opened with your Pro EX query details.');
    proexForm.reset();
  });
}

const trackingForm = document.querySelector('#trackingForm');
if (trackingForm) {
  trackingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const consignment = document.querySelector('#consignmentNumber').value.trim();
    if (!consignment) {
      alert('Please enter a consignment number.');
      return;
    }

    const status = document.querySelector('#statusResult');
    status.textContent = `Tracking update for ${consignment}: In transit to destination hub.`;
  });
}
