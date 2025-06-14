const formURL = 'https://shorturl.at/UTz7a';

document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  formData.append("formType", "service");

  fetch(formURL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => {
      alert("Formulir pendaftaran berhasil dikirim!");
      this.reset();
    })
    .catch((err) => alert("Terjadi kesalahan: " + err));
});

document.getElementById("saranForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  formData.append("formType", "ulasan");

  fetch(formURL, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => {
      alert("Ulasan berhasil dikirim!");
      this.reset();
    })
    .catch((err) => alert("Terjadi kesalahan: " + err));
});
