function handlesubmit(event) {
  event.preventDefault();
  const inputname = document.getElementById("name").value;
  const inputemail = document.getElementById("email").value;
  const inputPhonenumber = document.getElementById("Phonenumber").value;
  const inputsubject = document.getElementById("subject").value;
  const inputpesan = document.getElementById("pesan").value;

  if (inputname.length == 0) {
    return alert(`Nama Gak Boleh Kosong BOSS`);
  } else if (!inputemail.length) {
    return alert(`Emailnya Kosong Nih`);
  } else if (!inputPhonenumber.length) {
    return alert(`Nomornya kosong boss`);
  } else if (!inputsubject.length) {
    return alert`Pilih dulu Mau kelas apa boss`;
  } else if (!inputpesan.length) {
    return alert`kirim Pesan apa boss`;
  }

  const link = document.createElement("a");
  link.href = `mailto:${inputemail}subject: ${inputsubject}&body=name: ${inputname}\nNomorhp: ${inputPhonenumber}\npesan: ${inputpesan}`;

  link.click();

  const contac = {
    name: inputname,
    email: inputemail,
    phoneNumber: inputPhonenumber,
    subject: inputsubject,
    message: inputMessage,
  };

  console.log(contac);
}
