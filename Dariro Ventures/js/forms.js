/* ═══════════════════════════════════════════════
   js/forms.js
   Handles booking form + contact form submissions.

   HOW TO MAKE FORMS SEND REAL EMAILS:
   Option A (easiest, free): Use EmailJS
     1. Sign up at emailjs.com
     2. Add this script to index.html <head>:
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
     3. Uncomment the EmailJS blocks below and fill in your IDs

   Option B: Use a backend (Node.js + Nodemailer)
     See backend/server.js for that approach.
   ═══════════════════════════════════════════════ */

/* ── Set minimum date on all date inputs to today ── */
document.addEventListener('DOMContentLoaded', () => {
  const today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(input => {
    input.setAttribute('min', today);
  });

  /* Ensure return date is never before pickup date */
  const pickupInput = document.querySelector('input[name="pickupDate"]');
  const returnInput = document.querySelector('input[name="returnDate"]');

  if (pickupInput && returnInput) {
    pickupInput.addEventListener('change', () => {
      returnInput.setAttribute('min', pickupInput.value);
      if (returnInput.value && returnInput.value < pickupInput.value) {
        returnInput.value = pickupInput.value;
      }
    });
  }
});

/* ── Show / hide success message helper ── */
function showSuccess(elementId, duration = 7000) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, duration);
}

/* ── BOOKING FORM ── */
function submitBooking(e) {
  e.preventDefault();
  const form = e.target;

  // Collect form data
  const data = {
    fullName:        form.fullName.value,
    phone:           form.phone.value,
    email:           form.email.value,
    vehicleCategory: form.vehicleCategory.value,
    pickupDate:      form.pickupDate.value,
    returnDate:      form.returnDate.value,
    pickupLocation:  form.pickupLocation.value,
    rentalPeriod:    form.rentalPeriod.value,
    paymentMethod:   form.paymentMethod.value,
    requirements:    form.requirements.value,
  };

  // ── Option A: EmailJS (uncomment and fill in your IDs) ──
  /*
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_BOOKING_TEMPLATE_ID', {
    from_name:    data.fullName,
    from_email:   data.email,
    phone:        data.phone,
    vehicle:      data.vehicleCategory,
    pickup_date:  data.pickupDate,
    return_date:  data.returnDate,
    location:     data.pickupLocation,
    period:       data.rentalPeriod,
    payment:      data.paymentMethod,
    message:      data.requirements,
    to_email:     'dariroventureslimited@gmail.com',
  }).then(() => {
    showSuccess('bookSuccess');
    form.reset();
  }).catch(err => {
    console.error('EmailJS error:', err);
    alert('Something went wrong. Please call us directly on +260 770 845 279');
  });
  return; // stop execution here when using EmailJS
  */

  // ── Option B: Fetch to backend API ──
  /*
  fetch('http://localhost:5000/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(() => {
    showSuccess('bookSuccess');
    form.reset();
  })
  .catch(err => {
    console.error('API error:', err);
    alert('Something went wrong. Please call us on +260 770 845 279');
  });
  return;
  */

  // ── Default (no backend yet): just show success message ──
  console.log('Booking data:', data);
  showSuccess('bookSuccess');
  form.reset();
}

/* ── CONTACT FORM ── */
function submitContact(e) {
  e.preventDefault();
  const form = e.target;

  const data = {
    name:        form.name.value,
    phone:       form.phone.value,
    email:       form.email.value,
    enquiryType: form.enquiryType.value,
    message:     form.message.value,
  };

  // ── Option A: EmailJS ──
  /*
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_CONTACT_TEMPLATE_ID', {
    from_name:  data.name,
    from_email: data.email,
    phone:      data.phone,
    subject:    data.enquiryType,
    message:    data.message,
    to_email:   'dariroventureslimited@gmail.com',
  }).then(() => {
    showSuccess('contactSuccess');
    form.reset();
  });
  return;
  */

  // ── Default ──
  console.log('Contact data:', data);
  showSuccess('contactSuccess');
  form.reset();
}
