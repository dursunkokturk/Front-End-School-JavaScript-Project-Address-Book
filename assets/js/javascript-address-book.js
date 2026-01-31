/*
Adres Defteri

Veri Yapılarını Oluşturma

Aşağıdaki bilgiler için ayrı ayrı diziler (array) oluşturunuz:

    Ad, Soyad, Adres, Telefon, E-posta

Kullanıcı Menüsü

Kullanıcıya bir menü gösteriniz.

    Menüde en az şu seçenekler bulunmalıdır:

1 - Kayıt Ekle

2 - Çıkış


Kayıt Ekleme

Kullanıcı 1 seçeneğini seçtiğinde:

    Ad, Soyad, Adres, Telefon, E-posta

bilgilerini prompt kullanarak alınız. Alınan her bilgiyi ilgili dizinin sonuna (push) ekleyiniz.


Tekrar Menüye Dönme

    Kayıt eklendikten sonra kullanıcı tekrar menüye yönlendirilmelidir.
    Kullanıcı 2 - Çıkış seçeneğini seçene kadar program çalışmaya devam etmelidir.

HTML’e Yazdırma

Dizilerde tutulan kayıtları HTML üzerinde liste halinde gösteriniz.

Her kayıt için:

    Ad + Soyad
    Adres
    Telefon
    E-posta

bilgileri okunabilir şekilde yer almalıdır.


Stil (CSS)

Sayfanın görsel tasarımı tamamen size bırakılmıştır.

Liste yapısı, yazı tipi, renkler ve düzen konusunda özgürsünüz.


Vakti kalanlar için:

Kart tasarımı

Hover efektleri

Flex veya Grid kullanabilirsiniz.
*/

let personFirstNames = [];
let personLastNames = [];
let personAddresses = [];
let personPhones = [];
let personEMails = [];

let continues = true;

while (continues) {
  let choise = prompt(`
    Hangi işlemi yapmak istiyorsunuz?

    1 - Kişi Ara
    2 - Kişi Ekle
    3 - Kişi Sil
    4 - Kişi Güncelle
    5 - Kişileri Listele
    0 - Çıkış

  `);

  switch (choise) {
    case '1':
      personSearch();
      break;

    case '2':
      personAdd();
      break;

    case '3':
      personDelete();
      break;

    case '4':
      personUpdate();
      break;

    case '5':
      personList();
      break;

    case '0':
      console.log('Çıkış yapıldı');
      continues = false;
      break;

    default:
      console.log('Geçersiz seçim yaptınız.');
  }
}

function personSearch() {
  let personSearched = prompt("Aranacak İsmi Giriniz").toLowerCase().trim();

  if (personSearched === "") {
    alert("İsim Alanı Boş Bırakılamaz");
  } else {
    for (let i = 0; i < personFirstNames.length; i++) {
      if (personFirstNames[i].toLowerCase() === personSearched) {
        searchResultFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[i]} ${personLastNames[i]}</li>`;
        searchResultAddresses.innerHTML += `<li>${personAddresses[i]}</li>`;
        searchResultPhones.innerHTML += `<li>${personPhones[i]}</li>`;
        searchResultEMails.innerHTML += `<li>${personEMails[i]}</li>`;
        return;
      }
    }
    alert(`${personSearched} Bulunamadı`);
    console.log(`${personSearched} Bulunamadı`);
  }
}


function personAdd() {
  let personAddFirstName = prompt("Kişinin Adını Giriniz");
  let personAddLastName = prompt("Kişinin Soyadını Giriniz");
  let personAddAddress = prompt("Kişinin Adresini Giriniz");
  let personAddPhone = prompt("Kişinin Telefonunu Giriniz");
  let personAddEMail = prompt("Kişinin E-Mail Adresini Giriniz");

  personFirstNames.push(personAddFirstName);
  personLastNames.push(personAddLastName);
  personAddresses.push(personAddAddress);
  personPhones.push(personAddPhone);
  personEMails.push(personAddEMail);

  addResultFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[personFirstNames.length - 1]} ${personLastNames[personLastNames.length - 1]}</li>`;
  addResultAddresses.innerHTML += `<li>${personAddresses[personAddresses.length - 1]}</li>`;
  addResultPhones.innerHTML += `<li>${personPhones[personPhones.length - 1]}</li>`;
  addResultEMails.innerHTML += `<li>${personEMails[personEMails.length - 1]}</li>`;

  personList();
}

function personDelete() {
  let personDeleteFirstName = prompt("Silinecek Kişinin Adını Giriniz").toLowerCase();

  for (let i = 0; i < personFirstNames.length; i++) {
    if (personFirstNames[i].toLowerCase() === personDeleteFirstName) {
      deleteResultFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[i]} ${personLastNames[i]}</li>`;
      deleteResultAddresses.innerHTML += `<li>${personAddresses[i]}</li>`;
      deleteResultPhones.innerHTML += `<li>${personPhones[i]}</li>`;
      deleteResultEMails.innerHTML += `<li>${personEMails[i]}</li>`;

      personFirstNames.splice(i, 1);
      personLastNames.splice(i, 1);
      personAddresses.splice(i, 1);
      personPhones.splice(i, 1);
      personEMails.splice(i, 1);

      alert("Silme İşlemi Başarılı");

      personList();

      return;
    } else {
      console.log(`Silinen İsim : ${personDeleteFirstName}`);
    }
  }
}

function personUpdate() {
  let personUpdateFirstName = prompt("Güncellenecek Kişinin Adını Giriniz").toLowerCase();

  for (let i = 0; i < personFirstNames.length; i++) {
    if (personFirstNames[i].toLowerCase() === personUpdateFirstName) {
      let newFirstName = prompt('Yeni İsmi Giriniz:');
      let newLastName = prompt('Yeni Soyismi Giriniz:');
      let newAddress = prompt('Yeni Adresi Giriniz:');
      let newPhone = prompt('Yeni Telefonu Giriniz:');
      let newEmail = prompt('Yeni E-Mail Adresini Giriniz:');

      personFirstNames[i] = newFirstName;
      personLastNames[i] = newLastName;
      personAddresses[i] = newAddress;
      personPhones[i] = newPhone;
      personEMails[i] = newEmail;

      // alert(`Güncellenen Kişinin Bilgileri: ${newFirstName} ${newLastName}, Yaş: ${newAge}`);
      console.log(`Güncellenen Kişinin Bilgileri: ${newFirstName} ${newLastName} ${newAddress} ${newPhone} ${newEmail}`);
      alert("Güncelle İşlemi Başarılı");

      personList();

      return;
    } else {
      alert("Güncelleme İşlemi Başarısız");
    }
  }
}

function personList() {
  listResultFirstNameAnduserLastName.innerHTML = "";
  listResultAddresses.innerHTML = "";
  listResultPhones.innerHTML = "";
  listResultEMails.innerHTML = "";

  for (let i = 0; i < personFirstNames.length; i++) {
    listResultFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[i]} ${personLastNames[i]}</li>`;
    listResultAddresses.innerHTML += `<li>${personAddresses[i]}</li>`;
    listResultPhones.innerHTML += `<li>${personPhones[i]}</li>`;
    listResultEMails.innerHTML += `<li>${personEMails[i]}</li>`;
  }
}