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
  let userFirstNamed = prompt("Aranacak İsmi Giriniz");

  userFirstNamed = userFirstNamed.toLowerCase();

  for (let i = 0; i < personFirstNames.length; i++) {
    if (personFirstNames[i].toLowerCase() === userFirstNamed) {
      userFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[i]} ${personLastNames[i]}, Adres: ${personAddresses[i]}, Telefon: ${personPhones[i]}, E-Mail: ${personEMails[i]}</li>`;
      return;
    }
  }
  alert(`${userFirstNamed} Bulunamadı`);
  console.log(`${userFirstNamed} Bulunamadı`);
}

function personAdd() {
  let userFirstName = prompt("Kişinin Adını Giriniz");
  let userLastName = prompt("Kişinin Soyadını Giriniz");
  let userAddress = prompt("Kişinin Adresini Giriniz");
  let userPhone = prompt("Kişinin Telefonunu Giriniz");
  let userEMail = prompt("Kişinin E-Mail Adresini Giriniz");

  personFirstNames.push(userFirstName);
  personLastNames.push(userLastName);
  personAddresses.push(userAddress);
  personPhones.push(userPhone);
  personEMails.push(userEMail);

  // userFirstNames.innerHTML += `<li>${personFirstNames}</li>`;
  // userLastNames.innerHTML += `<li>${personLastNames}</li>`;

  userFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[personFirstNames.length - 1]} ${personLastNames[personLastNames.length - 1]}</li>`;
  userAddresses.innerHTML += `<li>${personAddresses[personAddresses.length - 1]}</li>`;
  userPhones.innerHTML += `<li>${personPhones[personPhones.length - 1]}</li>`;
  userEMails.innerHTML += `<li>${personEMails[personEMails.length - 1]}</li>`;

  console.log(personFirstNames[personFirstNames.length - 1]);
  console.log(personLastNames[personLastNames.length - 1]);
  console.log(personAddresses[personAddresses.length - 1]);
  console.log(personPhones[personPhones.length - 1]);
  console.log(personEMails[personEMails.length - 1]);
}

function personDelete() {
  let userFirstName = prompt("Silinecek Kişinin Adını Giriniz");
}

function personList() {
  for (let i = 0; i < personFirstNames.length; i++) {
    console.log(personFirstNames[i]);
    console.log(personLastNames[i]);
    console.log(personAddresses[i]);
    console.log(personPhones[i]);
    console.log(personEMails[i]);

    userFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames[i]} ${personLastNames[i]}</li>`;

    // userFirstNameAnduserLastName += `<li>${personFirstNames} ${personLastNames}</li>`;
    // userAddresses.innerHTML += `<li>${personAddresses}</li>`;
    // userPhones.innerHTML += `<li>${personPhones}</li>`;
    // userEMails.innerHTML += `<li>${personEMails}</li>`;
  }
}