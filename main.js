// function hello() { 
//     console.log(arguments[0]); 
// } 
  
// hello("GFG"); 
function func(n) { 
    console.log("Length is: " + arguments.length); 
} 
  
func(1, 2, 3, 4, 5);  

// Sayfa yüklendiğinde ilk sekme içeriğini göster
document.addEventListener("DOMContentLoaded", function() {
    showTab('tab1-content'); // Başlangıçta London içerik gösterilsin
});

// Sekme değiştirici fonksiyon
function showTab(tabId) {
    // Tüm sekme içeriklerini gizle
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Aktif olan sekmeyi göster
    const activeTab = document.getElementById(tabId);
    activeTab.classList.add('active');
}



  // Buton elementini seçiyoruz
  const gosterButon = document.getElementById('gosterButon');
  // Metin kutusunu seçiyoruz
  const metinKutusu = document.getElementById('metinKutusu');

  // Butona tıklandığında metin kutusunu göster
  gosterButon.addEventListener('click', function() {
      // Metin kutusunu görünür yap
      metinKutusu.style.display = 'block';
  });




// Sekme içeriklerini gizleyecek fonksiyon
function hideAllTabs() {
    // Tüm sekme içeriklerini gizle
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
}

// London sekmesinin içeriğini gösteren fonksiyon
function showLondon() {
    hideAllTabs(); // Diğer sekmeleri gizle
    const londonTab = document.getElementById('tab1-content');
    londonTab.classList.add('active'); // London sekmesini göster
}

// Paris sekmesinin içeriğini gösteren fonksiyon
function showParis() {
    hideAllTabs(); // Diğer sekmeleri gizle
    const parisTab = document.getElementById('tab2-content');
    parisTab.classList.add('active'); // Paris sekmesini göster
}

// Tokyo sekmesinin içeriğini gösteren fonksiyon
function showTokyo() {
    hideAllTabs(); // Diğer sekmeleri gizle
    const tokyoTab = document.getElementById('tab3-content');
    tokyoTab.classList.add('active'); // Tokyo sekmesini göster
}

// Sayfa yüklendiğinde ilk sekme içeriğini göster
document.addEventListener("DOMContentLoaded", function() {
    showLondon(); // Sayfa açıldığında London sekmesini göster
});
