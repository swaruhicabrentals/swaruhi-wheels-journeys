// Central place for business info. Update phone/email/address before launch.
export const SITE = {
  name: "Swaruhi Travels",
  tagline: "Premium Car Rentals, Tempo Traveller & Tour Packages",
  description:
    "Swaruhi Travels offers reliable car rentals, Tempo Traveller rentals and curated tour packages across Mumbai and Ahmedabad. Clean vehicles, experienced drivers, transparent pricing.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  whatsappHref:
    "https://wa.me/919876543210?text=Hi%20Swaruhi%20Travels%2C%20I%27d%20like%20a%20quote.",
  email: "bookings@swaruhitravels.com",
  emailHref: "mailto:bookings@swaruhitravels.com",
  cities: ["Mumbai", "Ahmedabad"],
  addressMumbai: "Andheri East, Mumbai, Maharashtra 400069",
  addressAhmedabad: "SG Highway, Ahmedabad, Gujarat 380015",
  hours: "Open 24 × 7",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/tour-packages", label: "Tour Packages" },
  { to: "/mumbai-travel-services", label: "Mumbai" },
  { to: "/ahmedabad-travel-services", label: "Ahmedabad" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
