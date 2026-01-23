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

    1 - Kullanıcı Ara
    2 - Kullanıcı Ekle
    3 - Kullanıcı Sil
    4 - Kullanıcı Güncelle
    5 - Kullanıcıları Listele
    0 - Çıkış

  `);

  switch (choise) {
    case '1':
      search();
      break;

    case '2':
      personAdd();
      break;

    case '3':
      userDelete();
      break;

    case '4':
      userUpdate();
      break;

    case '5':
      usersList();
      break;

    case '0':
      console.log('Çıkış yapıldı');
      continues = false;
      break;

    default:
      console.log('Geçersiz seçim yaptınız.');
  }
}

function personAdd(){
  let userFirstName = prompt("Kişinin Adını Giriniz");
  personFirstNames.push(userFirstName);
  // userFirstNames.innerHTML += `<li>${personFirstNames}</li>`;
  
  let userLastName = prompt("Kişinin Soyadını Giriniz");
  personLastNames.push(userLastName);
  // userLastNames.innerHTML += `<li>${personLastNames}</li>`;

  userFirstNameAnduserLastName.innerHTML += `<li>${personFirstNames} ${personLastNames}</li>`;
  
  let userAddress = prompt("Kişinin Adresini Giriniz");
  personAddresses.push(userAddress);
  userAddresses.innerHTML += `<li>${personAddresses}</li>`;
  
  let userPhone = Number(prompt("Kişinin Telefonunu Giriniz"));
  personPhones.push(userPhone);
  userPhones.innerHTML += `<li>${personPhones}</li>`;

  let userEMail = prompt("Kişinin E-Mail Adresini Giriniz");
  personEMails.push(userEMail);
  userEMails.innerHTML += `<li>${personEMails}</li>`;

  // console.log(personFirstNames);
  // console.log(personLastNames);
  // console.log(personAddresses);
  // console.log(personPhones);
  // console.log(personEMails);

  // console.log(userFirstNameAnduserLastName);
}

// personAdd();