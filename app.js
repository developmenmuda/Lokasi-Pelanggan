const WA_NUMBER = "6285388694030";

function orderOjek() {
  
  const status = document.getElementById("status");
  
  if (!navigator.geolocation) {
    status.innerText = "❌ GPS tidak support";
    return;
  }
  
  status.innerText = "🔎 Mencari lokasi...";
  
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      
      status.innerText = "✅ Lokasi ditemukan";
      
      const link = `https://www.google.com/maps?q=${lat},${lng}`;
      
      setTimeout(() => {
        
        const message =
          `🔔 PELANGGAN 🙋

Halo kak ini lokasi 📍
Saya di tunggu ya kak 😊

Lokasi saya:
${link}`;
        
        const wa =
          `https://wa.me/${WA_NUMBER}?text=` +
          encodeURIComponent(message);
        
        window.open(wa, "_blank");
        
        status.innerText = "📤 Terkirim ke WhatsApp";
        
      }, 500);
      
    },
    () => {
      status.innerText = "❌ Izin lokasi ditolak / GPS dimatikan";
    },
    {
      enableHighAccuracy: true,
      timeout: 8000,
      maximumAge: 0
    }
  );
}