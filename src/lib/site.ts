// Central place for business info. Update phone/email/address before launch.
export const SITE = {
  name: "Swaruhi Travels",
  url: "https://swaruhitravels.in",
  tagline: "Premium Cab Rentals, Tempo Traveller & Tour Packages",
  description:
    "Swaruhi Travels offers reliable cab rentals, Tempo Traveller rentals and curated tour packages across India, with offices in Mumbai and Ahmedabad. Clean vehicles, experienced drivers, transparent pricing.",
  phone: "+91 80804 64469",
  phoneHref: "tel:+918080464469",
  whatsapp: "918080464469",
  whatsappHref:
    "https://wa.me/918080464469?text=Hi%20Swaruhi%20Travels%2C%20I%27d%20like%20a%20quote.",
  googleBusinessHref: "https://share.google/bfThgug8GVyzJ2FU8",
  email: "bookings@swaruhitravels.com",
  emailHref: "mailto:bookings@swaruhitravels.com",
  offices: ["Mumbai", "Ahmedabad"],
  addressMumbai: "3 Dashrath Sadan, Gavanpada, Mulund East, Mumbai 400081",
  addressAhmedabad: "SG Highway, Ahmedabad, Gujarat 380015",
  hours: "Open 24 x 7",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Vehicle Category" },
  { to: "/services/tour-packages", label: "Tour Packages" },
  { to: "/mumbai-cab-rentals", label: "Mumbai Office" },
  { to: "/ahmedabad-cab-rentals", label: "Ahmedabad Office" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
