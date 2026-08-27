const SHOP_WHATSAPP = "254702464455";

function orderOnWhatsApp(fabricName, fabricPrice) {
  const message = encodeURIComponent(
    `Hi Mamaliq Fabrics! I would like to order: ${fabricName} priced at ${fabricPrice}. Please confirm availability and delivery.`
  );
  
  window.open(`https://wa.me/${SHOP_WHATSAPP}?text=${message}`, "_blank");
}