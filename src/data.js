import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" }
];

export const socialLinks = [
  { id: 1, href: "www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "www.squarespace.com", icon: "fab fa-squarespace" }
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia"
  }
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 24, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "china",
    duration: 6,
    cost: 2100
  },
  {
    id: 2,
    image: tour2,
    date: "october 22, 2020",
    title: "Rain Forest Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "costa rica",
    duration: 6,
    cost: 1100
  },
  {
    id: 3,
    image: tour3,
    date: "December 1, 2020",
    title: "City Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "united states",
    duration: 6,
    cost: 3100
  },
  {
    id: 4,
    image: tour4,
    date: "February 11, 2021",
    title: "Safari Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    location: "Africa",
    duration: 6,
    cost: 2100
  }
];
