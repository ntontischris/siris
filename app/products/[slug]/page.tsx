"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would normally come from a database or API
const getProductBySlug = (slug: string) => {
  // Sample product data - in a real app, this would be fetched from an API
  const products = {
    "cascha-guitar": {
      id: "cascha-guitar",
      name: "Κιθάρα Cascha για Αρχάριους",
      description:
        "Ακουστική κιθάρα ιδανική για αρχάριους, σε τρεις διαφορετικές αποχρώσεις από ξύλο Maoni με κάπακι έλατο.",
      longDescription: `
  <p>Το σετ συμπεριλαμβάνει:</p>
  <ul>
    <li>Ακουστική Κιθάρα EC-1020 Dreadnought Full Size</li>
    <li>Ψηφιακό κουρδιστήρι</li>
    <li>Θήκη με επένδυση 10mm αδιάβροχη με λουριά ώμου και αποθηκευτικό χώρο για αξεσουάρ με φερμουάρ</li>
    <li>Πανάκι καθαρισμού</li>
    <li>Επιπλέον σετ χορδών</li>
    <li>Pick guard</li>
    <li>Καποτάστο</li>
    <li>Ζώνη κιθάρας</li>
    <li>Πέννες</li>
  </ul>
  
  <p><strong>Χαρακτηριστικά:</strong></p>
  <ul>
    <li>Καπάκι: African Spruce Top / Έλατο</li>
    <li>Πλαϊνό και Πίσω μέρος: African Nato / Είδος Μαόνι</li>
    <li>Λαιμός: African Nato / Είδος Μαόνι "C" προφίλ</li>
    <li>Χορδιέρα: African Nato / Είδος Μαόνι</li>
    <li>Τάστα: 20, 41 inches Full Scale</li>
    <li>Position Marks, Inlayed</li>
    <li>Κλειδιά: Die cast Steel</li>
    <li>Συμπεριλαμβάνει αδιάβροχη θήκη μεταφοράς</li>
  </ul>
`,
      price: 199,
      image: "/images/cascha-guitar-sunburst.jpg",
      gallery: [
        "/images/cascha-guitar-sunburst.jpg",
        "/images/cascha-guitar-black.jpg",
        "/images/cascha-guitar-natural.jpg",
      ],
      inStock: true,
      rating: 4.5,
      reviewCount: 12,
      sku: "CASCHA-GTR-001",
      category: "instruments",
    },
    "cascha-violin-set": {
      id: "cascha-violin-set",
      name: "Βιολιά Cascha 1/4, 1/2, 3/4, 4/4",
      description: "Βιολιά Cascha διαθέσιμα σε διάφορα μεγέθη (1/4, 1/2, 3/4, 4/4) από σχεδίαση με κάπακι έλατο.",
      longDescription: `
  <p>Το σετ συμπεριλαμβάνει:</p>
  <ul>
    <li>Βιολί 1/4</li>
    <li>Δοξάρι</li>
    <li>Ρετσίνι</li>
    <li>Επιπλέον σετ χορδών</li>
    <li>Γέφυρα βιολιού</li>
    <li>Βαλίτσα μεταφοράς με λουριά ώμου / πλάτης</li>
  </ul>
  
  <p><strong>Χαρακτηριστικά Βιολιού:</strong></p>
  <ul>
    <li>Μέγεθος: 1/4</li>
    <li>Καπάκι: Solid Spruce Top / Μασίφ Έλατο</li>
    <li>Πλαϊνά και Πίσω: Maple / Σφένδαμος</li>
    <li>Ταστιέρα, Υποσιάγωνο και Κλειδιά: Ebony / Έβενος</li>
    <li>4 βιδάκια μικροκουρδίσματος για εύκολο και γρήγορο κούρδισμα</li>
    <li>Δοξάρι με πραγματική τρίχα αλόγου και λαβή από έβενο με δερμάτινη επένδυση</li>
  </ul>
  
  <p><strong>Βαλίτσα Μεταφοράς:</strong></p>
  <p><em>Εξωτερικό</em></p>
  <ul>
    <li>Ειδικό υδατοαπωθητικό υλικό</li>
    <li>Ενισχυμένο χερούλι μεταφοράς</li>
    <li>Λουριά ώμου / πλάτης για εύκολη μεταφορά με ασφάλεια</li>
    <li>Αποθηκευτικός χώρος με φερμουάρ για διάφορα αξεσουάρ</li>
  </ul>
  
  <p><em>Εσωτερικό</em></p>
  <ul>
    <li>Βελούδινη επένδυση</li>
    <li>Αποθηκευτικός χώρος με καπάκι</li>
    <li>Στήριξη λαιμού με λουράκι</li>
    <li>2 κλιψάκια στήριξης για δοξάρια</li>
  </ul>
`,
      price: 299,
      image: "/images/violin-cascha-new.jpg",
      gallery: [
        "/images/violin-cascha-new.jpg",
        "/images/violin-bow-cascha.jpeg",
        "/images/violin-case-closed.jpeg",
        "/images/violin-case-open.jpeg",
        "/images/violin-case-interior.jpeg",
      ],
      inStock: true,
      rating: 4.7,
      reviewCount: 8,
      sku: "CASCHA-VLN-SET",
      category: "instruments",
    },
    "saz-oud": {
      id: "saz-oud",
      name: "SAZ ΟΥΤΙ Επαγγελματικό No5A",
      description: "Χειροποίητο επαγγελματικό ουτι Τουρκίας με σκάφος 21 δούγιων και κάπακι από έλατο.",
      longDescription: `
        <p><strong>SAZ ΟΥΤΙ Επαγγελματικό No5A</strong></p>
        <p>Χειροποίητο Τουρκίας Επαγγελματικό</p>
        
        <p><strong>Χαρακτηριστικά:</strong></p>
        <ul>
          <li>Σκάφος με 21 δούγιες</li>
          <li>Καπάκι: Spruce / Έλατο</li>
          <li>Λαιμός: Mahogany / Μαόνι</li>
          <li>Ταστιέρα: Mahogany / Μαόνι</li>
          <li>Σώμα: Dark Walnut / Σκούρη Καρυδιά</li>
          <li>Χορδιέρα: Mahogany / Μαόνι</li>
          <li>Nut: Palisander / Παλίσανδρος</li>
          <li>Κλειδιά: Ebony / Έβενος</li>
          <li>Scale: 58,5cm</li>
          <li>Μήκος: 49,5cm</li>
          <li>Φάρδος: 36-37cm</li>
          <li>Πάχος: 18cm</li>
          <li>Συμπεριλαμβάνει μαλακή θήκη</li>
        </ul>
      `,
      price: 599,
      image: "/images/oud-saz-front-rosettes.jpeg",
      gallery: [
        "/images/oud-saz-front-rosettes.jpeg",
        "/images/oud-saz-side-striped.jpeg",
        "/images/oud-saz-front-angle.jpeg",
        "/images/oud-saz-back-striped.jpeg",
        "/images/oud-saz-side-profile.jpeg",
        "/images/oud-saz-soundboard-detail.jpeg",
        "/images/oud-saz-tuning-pegs.jpeg",
        "/images/oud-saz-soft-case.jpeg",
      ],
      inStock: true,
      rating: 4.9,
      reviewCount: 15,
      sku: "SAZ-OYTI-001",
      category: "traditional",
    },
    "bouzouki-student-set": {
      id: "bouzouki-student-set",
      name: "Σετ Μαθητικό Μπουζούκι 8-χορδο Ελληνικό 3/4",
      description:
        "Μπουζούκι 8-χορδο Ελληνικό με μικρό μέγεθος 3/4, για μικρούς μαθητές που κάνουν τα πρώτα τους βήματα στην εκμάθηση.",
      longDescription: `
<p><strong>Σετ Μαθητικό Μπουζούκι 8-χορδο Ελληνικό 3/4</strong></p>
<p>Ιδανικό για μικρούς μαθητές που κάνουν τα πρώτα τους βήματα στην εκμάθηση του μπουζουκιού.</p>

<p><strong>Το Σετ συμπεριλαμβάνει:</strong></p>
<ul>
  <li>Μπουζούκι Ελληνικό 1Μ 3/4 8-χορδο Μαθητικό</li>
  <li>Θήκη Μπουζουκιού Soft</li>
  <li>Ψηφιακό Κουρδιστήρι</li>
  <li>Θήκη για πέννες</li>
  <li>Πέννες</li>
</ul>

<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Μέγεθος: 3/4</li>
  <li>Ταστιέρα: Οξιά</li>
  <li>Σώμα – Σκάφος: Οξιά</li>
  <li>Πλαστική φιγούρα</li>
  <li>Καπάκι: Οξιά</li>
  <li>8-χορδο σύστημα</li>
  <li>Ελληνικό στυλ</li>
</ul>
`,
      price: 189,
      image: "/images/bouzouki-set-complete.jpeg",
      gallery: [
        "/images/bouzouki-set-complete.jpeg",
        "/images/bouzouki-front-decorated.jpeg",
        "/images/bouzouki-back-wood.jpeg",
      ],
      inStock: true,
      rating: 4.6,
      reviewCount: 14,
      sku: "BOUZOUKI-STU-001",
      category: "traditional",
    },
    "lyre-case-single": {
      id: "lyre-case-single",
      name: "OLYMPUS LC-200 PolyFoam - Σκληρή Θήκη Ποντιακής Λύρας Διπλή",
      description:
        "Σκληρή θήκη-βαλίτσα για 2 Ποντιακές Λύρες με λουρί ώμου, συνδυάζει εξαιρετική προστασία με ελαφριά κατασκευή.",
      longDescription: `
<p><strong>OLYMPUS LC-200 PolyFoam</strong></p>
<p>Σκληρή Θήκη – Βαλίτσα Ποντιακής Λύρας Διπλή</p>

<p>Η σκληρή θήκη-βαλίτσα, για 2 Ποντιακές Λύρες με λουρί ώμου, συνδυάζει την εξαιρετική προστασία της σκληρής θήκης-βαλίτσας με τα χαρακτηριστικά μίας ελαφριάς θήκης με λουρί ώμου. Διαθέσιμη σε ΜΑΥΡΟ χρώμα.</p>

<p>Μετέφερε το όργανό σου με ασφάλεια, άνεση και στυλ.</p>

<p><strong>Εξωτερικό</strong></p>
<ul>
  <li>Εξαιρετικά ελαφριά</li>
  <li>Υφή νάιλον προστατευτικό κάλυμμα</li>
  <li>Ανθεκτικό χερούλι μεταφοράς</li>
  <li>Φερμουάρ</li>
  <li>Λουρί ώμου με ρυθμιζόμενο ιμάντα</li>
  <li>Μεγάλη τσέπη για αποθήκευση αξεσουάρ</li>
  <li>Εξωτερικές διαστάσεις θήκης: 66 x 17 x 35 cm</li>
</ul>

<p><strong>Εσωτερικό</strong></p>
<ul>
  <li>Άκαμπτο αφρώδες υλικό πολυστερίνης</li>
  <li>Βελούδινη επένδυση</li>
  <li>Αποθηκευτικός χώρος για διάφορα αξεσουάρ</li>
  <li>Κλιψάκια στήριξης για δοξάρια</li>
  <li>Κατάλληλη για 2 Ποντιακές Λύρες</li>
  <li>Εσωτερικές διαστάσεις θήκης οργάνου: 61 x 10 cm</li>
</ul>
`,
      price: 90,
      image: "/images/lyre-case-double-open.jpeg",
      gallery: ["/images/lyre-case-double-open.jpeg", "/images/lyre-case-olympos.jpg"],
      inStock: true,
      rating: 4.6,
      reviewCount: 22,
      sku: "OLYMPUS-LC200",
      category: "cases",
    },
    "lyre-case-single-olympus": {
      id: "lyre-case-single-olympus",
      name: "OLYMPUS LC-100 PolyFoam - Σκληρή Θήκη Ποντιακής Λύρας Μονή",
      description:
        "Σκληρή θήκη-βαλίτσα Ποντιακής Λύρας με λουρί ώμου, συνδυάζει εξαιρετική προστασία με ελαφριά κατασκευή.",
      longDescription: `
<p><strong>OLYMPUS LC-100 PolyFoam</strong></p>
<p>Σκληρή Θήκη – Βαλίτσα Ποντιακής Λύρας Μονή</p>

<p>Η σκληρή θήκη-βαλίτσα Ποντιακής Λύρας με λουρί ώμου συνδυάζει την εξαιρετική προστασία της σκληρής θήκης-βαλίτσας με τα χαρακτηριστικά μίας ελαφριάς θήκης με λουρί ώμου. Διαθέσιμη σε ΜΑΥΡΟ χρώμα.</p>

<p>Μετέφερε το όργανό σου με ασφάλεια, άνεση και στυλ.</p>

<p><strong>Εξωτερικό</strong></p>
<ul>
  <li>Εξαιρετικά ελαφριά</li>
  <li>Υφή νάιλον προστατευτικό κάλυμμα</li>
  <li>Ανθεκτικό χερούλι μεταφοράς</li>
  <li>Φερμουάρ</li>
  <li>Λουρί ώμου με ρυθμιζόμενο ιμάντα</li>
  <li>Μεγάλη τσέπη για αποθήκευση αξεσουάρ</li>
  <li>Εξωτερικές διαστάσεις θήκης: 66 x 17 x 26cm</li>
</ul>

<p><strong>Εσωτερικό</strong></p>
<ul>
  <li>Άκαμπτο αφρώδες υλικό πολυστερίνης</li>
  <li>Βελούδινη επένδυση</li>
  <li>Αποθηκευτικός χώρος για διάφορα αξεσουάρ</li>
  <li>Κλιψάκια στήριξης για δοξάρια</li>
  <li>Εσωτερικές διαστάσεις θήκης οργάνου: 61 x 12,5cm</li>
</ul>
`,
      price: 75,
      image: "/images/lyre-case-single-olympus.jpeg",
      gallery: ["/images/lyre-case-single-olympus.jpeg", "/images/lyre-case-single-open.jpeg"],
      inStock: true,
      rating: 4.7,
      reviewCount: 15,
      sku: "OLYMPUS-LC100",
      category: "cases",
    },
    "lyre-case-double": {
      id: "lyre-case-double",
      name: "Βαλίτσα Ποντιακής Λύρας - Διπλή",
      description:
        "Διπλή θήκη για ποντιακή λύρα, ιδανική για επαγγελματίες μουσικούς που χρειάζονται να μεταφέρουν δύο όργανα.",
      longDescription: `
        <p>Η διπλή βαλίτσα για ποντιακή λύρα είναι η ιδανική λύση για επαγγελματίες μουσικούς που χρειάζονται να μεταφέρουν δύο όργανα ταυτόχρονα.</p>
        <p>Προσφέρει εξαιρετική προστασία και πρακτικότητα στη μεταφορά.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: Διπλή θήκη</li>
          <li>Χωρητικότητα: 2 ποντιακές λύρες</li>
          <li>Υλικό: Ανθεκτικό εξωτερικό κέλυφος</li>
          <li>Εσωτερικό: Διαχωριστικά με μαλακή επένδυση</li>
          <li>Ιδανική για: Επαγγελματίες μουσικούς</li>
        </ul>
      `,
      price: 95,
      image: "/images/lyre-case-olympos.jpg",
      gallery: ["/images/lyre-case-olympos.jpg"],
      inStock: true,
      rating: 4.8,
      reviewCount: 18,
      sku: "LYRE-CASE-D",
      category: "cases",
    },
    "boss-tu3-tuner": {
      id: "boss-tu3-tuner",
      name: "Πεταλάκι Boss TU-3",
      description: "Χρωματικό πεταλάκι κουρδιστήρι Boss TU-3, επαγγελματική ποιότητα για ακριβές κούρδισμα.",
      longDescription: `
        <p>Το Boss TU-3 είναι ένα από τα πιο δημοφιλή και αξιόπιστα πεταλάκια κουρδιστήρι στον κόσμο.</p>
        <p>Προσφέρει εξαιρετική ακρίβεια και ταχύτητα στο κούρδισμα, ιδανικό για live εμφανίσεις και studio.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: Χρωματικό κουρδιστήρι</li>
          <li>Μάρκα: Boss</li>
          <li>Μοντέλο: TU-3</li>
          <li>Ακρίβεια: ±1 cent</li>
          <li>Οθόνη: LED με υψηλή ορατότητα</li>
          <li>Τροφοδοσία: 9V DC ή μπαταρία</li>
        </ul>
      `,
      price: 100,
      image: "/images/boss-tu3-new.jpg",
      gallery: ["/images/boss-tu3-new.jpg"],
      inStock: true,
      rating: 4.9,
      reviewCount: 45,
      sku: "BOSS-TU3",
      category: "pedals",
    },
    "boss-ge7-equalizer": {
      id: "boss-ge7-equalizer",
      name: "Πεταλάκι Boss GE-7",
      description: "Equalizer πεταλάκι Boss GE-7 με 7-band γραφικό equalizer για πλήρη έλεγχο του ήχου σας.",
      longDescription: `
        <p>Το Boss GE-7 είναι ένα επαγγελματικό 7-band γραφικό equalizer που σας επιτρέπει να διαμορφώσετε τον ήχο σας με ακρίβεια.</p>
        <p>Ιδανικό για κιθαρίστες που θέλουν πλήρη έλεγχο των συχνοτήτων του ήχου τους.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Τύπος: 7-band γραφικό equalizer</li>
          <li>Μάρκα: Boss</li>
          <li>Μοντέλο: GE-7</li>
          <li>Συχνότητες: 100Hz, 200Hz, 400Hz, 800Hz, 1.6kHz, 3.2kHz, 6.4kHz</li>
          <li>Εύρος: ±15dB ανά band</li>
          <li>Level slider για συνολικό έλεγχο</li>
        </ul>
      `,
      price: 115,
      image: "/images/boss-ge7-new.jpg",
      gallery: ["/images/boss-ge7-new.jpg"],
      inStock: true,
      rating: 4.7,
      reviewCount: 32,
      sku: "BOSS-GE7",
      category: "pedals",
    },
    "galli-set": {
      id: "galli-set",
      name: "Σετ χορδές Galli",
      description: "Πλήρες σετ χορδών για ποντιακή λύρα, υψηλής ποιότητας",
      longDescription: `
        <p>Το πλήρες σετ χορδών Galli για ποντιακή λύρα περιλαμβάνει όλες τις απαραίτητες χορδές για το όργανό σας.</p>
        <p>Το σετ αποτελείται από μία χορδή Galli 0,14 και δύο χορδές LA, ειδικά επιλεγμένες για να προσφέρουν τον αυθεντικό ήχο της ποντιακής λύρας.</p>
        <p>Περιεχόμενα σετ:</p>
        <ul>
          <li>1 x Χορδή Galli 0,14mm</li>
          <li>2 x Χορδές LA (A) για βιολί</li>
        </ul>
      `,
      price: 12,
      image: "/images/galli-set.jpeg",
      gallery: ["/images/galli-set.jpeg", "/images/galli-014.jpeg", "/images/galli-la.jpeg"],
      inStock: true,
      rating: 5,
      reviewCount: 18,
      sku: "GALLI-SET-01",
      category: "strings",
    },
    "horsehair-white": {
      id: "horsehair-white",
      name: "Τρίχες Δοξαριού",
      description: "Τρίχες Μογγολίας για άριστο ήχο, λευκές και μαύρες",
      longDescription: `
        <p>Οι τρίχες δοξαριού από Μογγολία είναι απαραίτητες για την καλή λειτουργία του δοξαριού της ποντιακής λύρας.</p>
        <p>Προσφέρουν εξαιρετική ποιότητα ήχου και αντοχή, διαθέσιμες σε λευκό και μαύρο χρώμα.</p>
        <p>Χαρακτηριστικά:</p>
        <ul>
          <li>Προέλευση: Μογγολία</li>
          <li>Χρώματα: Λευκό, Μαύρο</li>
          <li>Ποιότητα: Premium</li>
          <li>Χρήση: Δοξάρια έγχορδων οργάνων</li>
        </ul>
      `,
      price: 12,
      image: "/images/horsehair-white.jpeg",
      gallery: ["/images/horsehair-white.jpeg", "/images/horsehair-black.jpeg"],
      inStock: true,
      rating: 4.8,
      reviewCount: 25,
      sku: "HORSEHAIR-001",
      category: "accessories",
    },
    "baglama-handmade": {
      id: "baglama-handmade",
      name: "Χειροποίητος Μπαγλαμάς Νο.5Α",
      description: "Χειροποίητος μπαγλαμάς με δούγιες από καρυδιά, κάπακι έλατο και ταστιέρα από έβενο.",
      longDescription: `
<p><strong>Χειροποίητος Μπαγλαμάς Νο.5Α</strong></p>
<p>Παραδοσιακό χειροποίητο όργανο υψηλής ποιότητας με εξαιρετική κατασκευή και ήχο.</p>

<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Χειροποίητος</li>
  <li>Σκάφος: Walnut / Καρυδιά</li>
  <li>Δούγιες: 11</li>
  <li>Καπάκι: Spruce / Έλατο</li>
  <li>Ταστιέρα – Χορδιέρα: Ebony / Έβενος</li>
  <li>Παραδοσιακή κατασκευή</li>
  <li>Εξαιρετική ποιότητα ήχου</li>
  <li>Ιδανικό για επαγγελματίες και προχωρημένους μουσικούς</li>
</ul>

<p><strong>Περιγραφή:</strong></p>
<p>Ο μπαγλαμάς είναι ένα παραδοσιακό έγχορδο όργανο που χρησιμοποιείται ευρέως στη λαϊκή μουσική. Αυτό το χειροποίητο όργανο διακρίνεται για την εξαιρετική ποιότητα κατασκευής του, με σκάφος από καρυδιά που προσφέρει πλούσιο και ζεστό ήχο.</p>
`,
      price: 450,
      image: "/images/baglama-full-view.jpeg",
      gallery: [
        "/images/baglama-full-view.jpeg",
        "/images/baglama-full-side.jpeg",
        "/images/baglama-soundboard-angle.jpeg",
        "/images/baglama-front-full.jpeg",
        "/images/baglama-headstock-detail.jpeg",
        "/images/baglama-back-ribs.jpeg",
      ],
      inStock: true,
      rating: 4.8,
      reviewCount: 12,
      sku: "BAGLAMA-HM-001",
      category: "traditional",
    },
    "pontic-lyres-custom": {
      id: "pontic-lyres-custom",
      name: "Χειροποίητες Ποντιακές Λύρες",
      description:
        "Ποντιακές λύρες από 400€ με ξύλο της επιλογής σας, χειροποίητες από τον μάστορα Θεόδωρο Σιριστατίδη.",
      longDescription: `
<p><strong>Χειροποίητες Ποντιακές Λύρες</strong></p>
<p>Αυθεντικές ποντιακές λύρες κατασκευασμένες με παραδοσιακές τεχνικές και σύγχρονη ακρίβεια.</p>


<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Χειροποίητη κατασκευή</li>
  <li>Παραδοσιακή τεχνική</li>
  <li>Επιλογή ξύλου κατά προτίμηση</li>
  <li>Εξαιρετική ποιότητα ήχου</li>
  <li>Σκαλιστή κεφαλή με διακοσμητικά</li>
  <li>Επαγγελματικό φινίρισμα</li>
</ul>

<p><strong>Παραγγελία:</strong></p>
<p>Κάθε λύρα κατασκευάζεται κατόπιν παραγγελίας. Επικοινωνήστε μαζί μας για να συζητήσουμε τις προδιαγραφές και τον χρόνο παράδοσης.</p>
`,
      price: 400,
      image: "/images/pontic-lyres-collection.jpeg",
      gallery: ["/images/pontic-lyres-collection.jpeg"],
      inStock: true,
      rating: 4.9,
      reviewCount: 28,
      sku: "LYRE-CUSTOM-001",
      category: "traditional",
    },
    "professional-bow": {
      id: "professional-bow",
      name: "Δοξάρι Υψηλής Ποιότητας",
      description: "Δοξάρι υψηλής ποιότητας με τρίχα Μογγολίας για ποντιακή λύρα.",
      longDescription: `
<p><strong>Δοξάρι Υψηλής Ποιότητας με Τρίχα Μογγολίας</strong></p>
<p>Επαγγελματικό δοξάρι κατασκευασμένο με τα καλύτερα υλικά για εξαιρετική απόδοση.</p>

<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Τρίχα από Μογγολία υψηλής ποιότητας</li>
  <li>Ξύλινη κατασκευή με επαγγελματικό φινίρισμα</li>
  <li>Εργονομική λαβή για άνετη χρήση</li>
  <li>Εξαιρετική ισορροπία και ελεγχόμενη τάση</li>
  <li>Ανθεκτική κατασκευή</li>
</ul>

<p><strong>Προδιαγραφές:</strong></p>
<ul>
  <li>Υλικό: Επιλεγμένο ξύλο</li>
  <li>Τρίχα: Φυσική τρίχα Μογγολίας</li>
  <li>Μήκος: Τυπικό μήκος για ποντιακή λύρα</li>
  <li>Βάρος: Ισορροπημένο για άνετη χρήση</li>
</ul>
`,
      price: 70,
      image: "/images/professional-bows.jpeg",
      gallery: ["/images/professional-bows.jpeg"],
      inStock: true,
      rating: 4.7,
      reviewCount: 19,
      sku: "BOW-PROF-001",
      category: "accessories",
    },
    "metal-lyre-case-double": {
      id: "metal-lyre-case-double",
      name: "Βαλίτσα Διπλή Μεταλλική Ποντιακής Λύρας",
      description: "Σκληρή μεταλλική βαλίτσα για 2 Ποντιακές Λύρες, διαθέσιμη σε δύο αποχρώσεις (μαύρη & ασημί).",
      longDescription: `
<p><strong>Βαλίτσα Διπλή Μεταλλική Ποντιακής Λύρας</strong></p>
<p>Επαγγελματική μεταλλική βαλίτσα για τη μεταφορά και προστασία δύο ποντιακών λυρών.</p>

<p>Η σκληρή μεταλλική βαλίτσα προσφέρει μέγιστη προστασία για τα όργανά σας, ιδανική για επαγγελματίες μουσικούς που ταξιδεύουν συχνά. Διαθέσιμη σε δύο κομψές αποχρώσεις: μαύρη και ασημί.</p>

<p><strong>Εξωτερικό:</strong></p>
<ul>
  <li>Σκληρό μεταλλικό κέλυφος για μέγιστη προστασία</li>
  <li>Ενισχυμένες γωνίες με μεταλλικό πλαίσιο</li>
  <li>Ασφαλή κλείστρα με κλειδί</li>
  <li>Εργονομική χειρολαβή μεταφοράς</li>
  <li>Διαθέσιμες αποχρώσεις: Μαύρη, Ασημί</li>
  <li>Ανθεκτική κατασκευή για μακροχρόνια χρήση</li>
</ul>

<p><strong>Εσωτερικό:</strong></p>
<ul>
  <li>Πλούσια επένδυση από αφρώδες υλικό</li>
  <li>Προστατευτικά διαχωριστικά για κάθε λύρα</li>
  <li>Ειδικές θέσεις για δοξάρια</li>
  <li>Χώρος αποθήκευσης για αξεσουάρ</li>
  <li>Χωρητικότητα: 2 ποντιακές λύρες</li>
  <li>Ασφαλής στερέωση των οργάνων</li>
</ul>

<p><strong>Πλεονεκτήματα:</strong></p>
<ul>
  <li>Εξαιρετική προστασία από κτυπήματα και κραδασμούς</li>
  <li>Ιδανική για μετακινήσεις και ταξίδια</li>
  <li>Επαγγελματική εμφάνιση</li>
  <li>Μακροχρόνια αντοχή</li>
</ul>
`,
      price: 85,
      image: "/images/metal-lyre-case-black.jpg",
      gallery: [
        "/images/metal-lyre-case-black.jpg",
        "/images/metal-lyre-case-silver.jpg",
        "/images/metal-lyre-case-interior.jpg",
      ],
      inStock: true,
      rating: 4.8,
      reviewCount: 14,
      sku: "METAL-CASE-D-001",
      category: "cases",
    },
    "metal-lyre-case-single": {
      id: "metal-lyre-case-single",
      name: "Βαλίτσα Μεταλλική Ποντιακής Λύρας",
      description: "Σκληρή μεταλλική βαλίτσα για Ποντιακή Λύρα, διαθέσιμη σε δύο αποχρώσεις (μαύρη & ασημί).",
      longDescription: `
<p><strong>Βαλίτσα Μεταλλική Ποντιακής Λύρας</strong></p>
<p>Επαγγελματική μεταλλική βαλίτσα για τη μεταφορά και προστασία της ποντιακής λύρας σας.</p>

<p>Η σκληρή μεταλλική βαλίτσα προσφέρει μέγιστη προστασία για το όργανό σας, ιδανική για μουσικούς που ταξιδεύουν συχνά. Διαθέσιμη σε δύο κομψές αποχρώσεις: μαύρη και ασημί.</p>

<p><strong>Εξωτερικό:</strong></p>
<ul>
  <li>Σκληρό μεταλλικό κέλυφος για μέγιστη προστασία</li>
  <li>Ενισχυμένες γωνίες με μεταλλικό πλαίσιο</li>
  <li>Ασφαλή κλείστρα με κλειδί</li>
  <li>Εργονομική χειρολαβή μεταφοράς</li>
  <li>Διαθέσιμες αποχρώσεις: Μαύρη, Ασημί</li>
  <li>Ανθεκτική κατασκευή για μακροχρόνια χρήση</li>
</ul>

<p><strong>Εσωτερικό:</strong></p>
<ul>
  <li>Πλούσια επένδυση από αφρώδες υλικό</li>
  <li>Προστατευτικά διαχωριστικά για ασφαλή μεταφορά</li>
  <li>Ειδική θέση για δοξάρι</li>
  <li>Χώρος αποθήκευσης για αξεσουάρ</li>
  <li>Χωρητικότητα: 1 ποντιακή λύρα</li>
  <li>Ασφαλής στερέωση του οργάνου</li>
</ul>

<p><strong>Πλεονεκτήματα:</strong></p>
<ul>
  <li>Εξαιρετική προστασία από κτυπήματα και κραδασμούς</li>
  <li>Ιδανική για μετακινήσεις και ταξίδια</li>
  <li>Επαγγελματική εμφάνιση</li>
  <li>Μακροχρόνια αντοχή</li>
  <li>Οικονομική επιλογή για μονή λύρα</li>
</ul>
`,
      price: 70,
      image: "/images/metal-lyre-case-single-black.jpg",
      gallery: [
        "/images/metal-lyre-case-single-black.jpg",
        "/images/metal-lyre-case-single-silver.jpg",
        "/images/metal-lyre-case-single-interior.jpg",
      ],
      inStock: true,
      rating: 4.7,
      reviewCount: 11,
      sku: "METAL-CASE-S-001",
      category: "cases",
    },
    "lyre-cable": {
      id: "lyre-cable",
      name: "Καλώδιο Ποντιακής Λύρας",
      description: "Επαγγελματικό καλώδιο για ποντιακή λύρα με υψηλή ποιότητα ήχου.",
      longDescription: `
<p><strong>Καλώδιο Ποντιακής Λύρας</strong></p>
<p>Επαγγελματικό καλώδιο σχεδιασμένο ειδικά για ποντιακές λύρες και άλλα έγχορδα όργανα.</p>

<p>Το καλώδιο προσφέρει εξαιρετική ποιότητα ήχου και αντοχή, ιδανικό για live εμφανίσεις και studio ηχογραφήσεις.</p>

<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Υψηλής ποιότητας καλώδιο με θωράκιση</li>
  <li>Ανθεκτικοί σύνδεσμοι Jack 6.3mm</li>
  <li>Εξαιρετική αγωγιμότητα σήματος</li>
  <li>Ελάχιστος θόρυβος και παρεμβολές</li>
  <li>Ανθεκτικό εξωτερικό περίβλημα</li>
  <li>Ιδανικό για σύνδεση με ενισχυτή</li>
</ul>

<p><strong>Προδιαγραφές:</strong></p>
<ul>
  <li>Τύπος: Instrument Cable</li>
  <li>Σύνδεσμοι: 6.3mm Jack σε Jack</li>
  <li>Μήκος: Τυπικό μήκος για stage και studio</li>
  <li>Θωράκιση: Ναι, για προστασία από παρεμβολές</li>
</ul>
`,
      price: 20,
      image: "/images/lyre-cable.jpg",
      gallery: ["/images/lyre-cable.jpg"],
      inStock: true,
      rating: 4.6,
      reviewCount: 23,
      sku: "CABLE-LYR-001",
      category: "accessories",
    },
    "aroma-tuner": {
      id: "aroma-tuner",
      name: "Κουρδιστήρι Aroma AT-01A",
      description: "Ψηφιακό κουρδιστήρι clip-on με οθόνη LCD, ιδανικό για όλα τα έγχορδα όργανα.",
      longDescription: `
<p><strong>Κουρδιστήρι Aroma AT-01A</strong></p>
<p>Χρωματικό ψηφιακό κουρδιστήρι με clip-on σχεδιασμό για εύκολη τοποθέτηση και χρήση.</p>

<p>Το Aroma AT-01A είναι ένα αξιόπιστο και οικονομικό κουρδιστήρι που προσφέρει ακριβές κούρδισμα για όλα τα έγχορδα όργανα, συμπεριλαμβανομένης της ποντιακής λύρας.</p>

<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Χρωματικό κούρδισμα για όλα τα όργανα</li>
  <li>Οθόνη LCD με υψηλή ορατότητα</li>
  <li>Clip-on σχεδιασμός για εύκολη τοποθέτηση</li>
  <li>Περιστρεφόμενη οθόνη 360° για βέλτιστη θέαση</li>
  <li>Αυτόματη απενεργοποίηση για οικονομία μπαταρίας</li>
  <li>Συμπαγής και ελαφρύ</li>
</ul>

<p><strong>Προδιαγραφές:</strong></p>
<ul>
  <li>Τύπος: Χρωματικό κουρδιστήρι</li>
  <li>Οθόνη: LCD με backlight</li>
  <li>Εύρος: A0 (27.5Hz) - C8 (4186Hz)</li>
  <li>Ακρίβεια: ±1 cent</li>
  <li>Τροφοδοσία: Μπαταρία CR2032</li>
  <li>Μάρκα: Aroma</li>
</ul>
`,
      price: 10,
      image: "/images/aroma-tuner.jpg",
      gallery: ["/images/aroma-tuner.jpg"],
      inStock: true,
      rating: 4.5,
      reviewCount: 67,
      sku: "TUNER-AROMA-001",
      category: "accessories",
    },
    "bow-rosin": {
      id: "bow-rosin",
      name: "Ρετσίνι Δοξαριού",
      description: "Επαγγελματικό ρετσίνι για δοξάρι από την Αυστρία, ιδανικό για βιολί, βιόλα και τσέλο.",
      longDescription: `
<p><strong>Ρετσίνι Δοξαριού - Rosin No. 807</strong></p>
<p>Επαγγελματικό ρετσίνι υψηλής ποιότητας από Αυστρία για έγχορδα όργανα.</p>

<p><strong>Χαρακτηριστικά:</strong></p>
<ul>
  <li>Προέλευση: Αυστρία</li>
  <li>Μοντέλο: Rosin No. 807</li>
  <li>Κατάλληλο για: Βιολί, Βιόλα, Τσέλο</li>
  <li>Ποιότητα: Professional Grade</li>
  <li>Συσκευασία: Πρακτική πράσινη θήκη</li>
</ul>

<p><strong>Οδηγίες Χρήσης:</strong></p>
<ul>
  <li>Εφαρμόστε ομοιόμορφα στις τρίχες του δοξαριού</li>
  <li>Αποφύγετε την υπερβολική εφαρμογή</li>
  <li>Φυλάσσεται σε δροσερό μέρος</li>
  <li>Καθαρίζετε τακτικά το όργανο από υπολείμματα</li>
</ul>

<p><strong>Προδιαγραφές:</strong></p>
<ul>
  <li>Κατασκευαστής: Fuzhi Musical Instrument Co., LTD</li>
  <li>Σύνθεση: Φυσικά υλικά υψηλής ποιότητας</li>
  <li>Διάρκεια ζωής: Μεγάλη αντοχή</li>
</ul>
`,
      price: 5,
      image: "/images/bow-rosin.jpg",
      gallery: ["/images/bow-rosin.jpg"],
      inStock: true,
      rating: 4.8,
      reviewCount: 42,
      sku: "ROSIN-807",
      category: "accessories",
    },
    "plastic-lyre-case": {
      id: "plastic-lyre-case",
      name: "Βαλίτσα Πλαστική Ποντιακής Λύρας",
      description: "Σκληρή πλαστική βαλίτσα για Ποντιακή Λύρα με εσωτερική επένδυση.",
      longDescription: `
<p><strong>Βαλίτσα Πλαστική Ποντιακής Λύρας</strong></p>
<p>Ανθεκτική πλαστική βαλίτσα για την ασφαλή μεταφορά της Ποντιακής Λύρας σας.</p>

<p>Η πλαστική βαλίτσα συνδυάζει την ανθεκτικότητα ενός σκληρού κελύφους με ελαφριά κατασκευή και προσιτή τιμή. Ιδανική για μουσικούς που χρειάζονται αξιόπιστη προστασία στις καθημερινές τους μετακινήσεις.</p>

<p><strong>Εξωτερικό:</strong></p>
<ul>
  <li>Σκληρό πλαστικό κέλυφος με μεταλλικό περίγραμμα</li>
  <li>Ενισχυμένες γωνίες για επιπλέον προστασία</li>
  <li>Ασφαλή μεταλλικά κλείστρα</li>
  <li>Εργονομική χειρολαβή μεταφοράς</li>
  <li>Ελαφριά και πρακτική</li>
  <li>Ανθεκτική στις καιρικές συνθήκες</li>
</ul>

<p><strong>Εσωτερικό:</strong></p>
<ul>
  <li>Πλούσια επένδυση από αφρώδες υλικό</li>
  <li>Προστατευτική μαλακή επένδυση</li>
  <li>Ειδική θέση για δοξάρι</li>
  <li>Χώρος αποθήκευσης αξεσουάρ</li>
  <li>Ασφαλής στερέωση του οργάνου</li>
  <li>Κατάλληλη για 1 Ποντιακή Λύρα</li>
</ul>

<p><strong>Πλεονεκτήματα:</strong></p>
<ul>
  <li>Εξαιρετική αναλογία ποιότητας/τιμής</li>
  <li>Ανθεκτική και ελαφριά</li>
  <li>Προστασία από κτυπήματα</li>
  <li>Εύκολη στη μεταφορά</li>
  <li>Ιδανική για καθημερινή χρήση</li>
</ul>
`,
      price: 75,
      image: "/images/plastic-lyre-case-interior.jpg",
      gallery: ["/images/plastic-lyre-case-interior.jpg", "/images/plastic-lyre-case-closed.jpg"],
      inStock: true,
      rating: 4.6,
      reviewCount: 18,
      sku: "PLASTIC-CASE-001",
      category: "cases",
    },
  }

  return products[slug as keyof typeof products] || null
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="bg-gray-900 rounded-lg p-8 text-center border border-gray-800">
            <h2 className="text-xl font-semibold text-white mb-2">Το προϊόν δεν βρέθηκε</h2>
            <p className="text-gray-400 mb-6">Το προϊόν που αναζητάτε δεν είναι διαθέσιμο ή δεν υπάρχει.</p>
            <Link href="/">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Επιστροφή στην Αρχική
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400">
              Αρχική
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href="/#products-section" className="text-gray-400 hover:text-amber-400">
              Προϊόντα
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-amber-400">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="aspect-square relative">
                <Image
                  src={product.gallery[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {product.gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {product.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-gray-900 rounded-md overflow-hidden border ${
                      selectedImage === index ? "border-amber-600" : "border-gray-800"
                    }`}
                  >
                    <div className="aspect-square relative">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} - Εικόνα ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-2">{product.name}</h1>

            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : i < product.rating
                          ? "text-amber-400 fill-amber-400 opacity-50"
                          : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-400">
                {product.rating} ({product.reviewCount} κριτικές)
              </span>
            </div>

            <p className="text-gray-300 mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  {product.id === "pontic-lyres-custom" ? "Από " : ""}
                  {product.price.toFixed(2)}€
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">{product.oldPrice.toFixed(2)}€</span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  product.inStock ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"
                }`}
              >
                {product.inStock ? "Διαθέσιμο" : "Εξαντλημένο"}
              </span>
              <span className="ml-2 text-sm text-gray-400">SKU: {product.sku}</span>
            </div>

            {/* Detailed Product Information */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-4">Λεπτομέρειες Προϊόντος</h3>
              <div
                className="prose prose-invert prose-sm max-w-none prose-headings:text-amber-400 prose-a:text-amber-400 prose-li:text-gray-300"
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
              />
            </div>

            {/* Contact for Purchase */}
            <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-lg border border-amber-900/30 p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Ενδιαφέρεστε για αυτό το προϊόν;</h3>
              <p className="text-gray-300 mb-4">
                Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες, διαθεσιμότητα και παραγγελία.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+306946278589" className="flex-1">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Phone className="mr-2 h-4 w-4" />
                    Κλήση: +30 694 627 8589
                  </Button>
                </a>
                <a href="mailto:siristatidistheo@gmail.com" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-amber-600 text-amber-400 hover:bg-amber-900/20 bg-transparent"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Product Description */}
      </div>
    </div>
  )
}
