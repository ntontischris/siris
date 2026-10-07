// Προϊόντα που είναι προσωρινά κρυμμένα από το site (δεν εμφανίζονται στην αρχική
// και η σελίδα τους επιστρέφει "Το προϊόν δεν βρέθηκε"). Για να τα εμφανίσεις ξανά,
// αφαίρεσε το slug από τη λίστα.
export const HIDDEN_PRODUCT_SLUGS = [
  "cascha-violin-set",
  "saz-oud",
  "bouzouki-student-set",
  "baglama-handmade",
  "lyre-case-single",
  "lyre-case-single-olympus",
  "boss-tu3-tuner",
  "boss-ge7-equalizer",
  "cascha-guitar",
]

export const isProductHidden = (slug: string) => HIDDEN_PRODUCT_SLUGS.includes(slug)
