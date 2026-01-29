import { NavItem, Review, Region, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Start' },
  { id: 'why', label: 'Why Us' },
  { id: 'regions', label: 'Regions' },
  { id: 'about', label: 'Story' },
  { id: 'stories', label: 'Reviews' },
  { id: 'contact', label: 'Plan Now' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Custom Vietnam Tours',
    description: "Every journey is designed from the ground up around your interests, pace, and budget. We don't reuse itineraries — we build them based on what actually works on the ground in Vietnam.",
    highlight: ['from the ground up', 'actually works']
  },
  {
    title: 'Direct Local Access',
    description: "Your trip is designed and operated locally, with direct access to trusted guides, drivers, and partners. No middlemen, no offshore call centres, just clear communication and better value.",
    highlight: ['operated locally', 'No middlemen']
  },
  {
    title: '24/7 Local Support',
    description: "Plans change. Weather happens. We're here in Vietnam and available when you need us, day or night, to handle issues quickly and keep your trip running smoothly.",
    highlight: ['here in Vietnam', 'quickly']
  }
];

export const REGIONS: Region[] = [
  {
    id: 'north',
    title: 'Northern Journeys',
    subtitle: 'Hanoi • Ha Long Bay • Sapa',
    description: 'A rich mix of culture, landscapes, and everyday life — ideal for travelers seeking highlights and quieter moments.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNFIoS-_pts3qQvujVoymeXfDT6sABz973C8WIuQF7-QLu2ZVO51SrXtFcrz899aeQ9fmdnSqjPIk-qeCwnRRJywYw-_E0EYRE38yhxpvF0oC1dow0dXJBLWZMkUVHefJuaXvEPvBU41Bt8exfEiSHJZUdQfBbhGeWLe5ufo7Km7EiXofr3gifRc5CVZgA1Drb9tNwNRRpKkt8-hAQdp1WoqWAglxlJaekCapkNoeqTi6BeL6e0tRCdwJnd6st_Ve1Um48igjRwh6'
  },
  {
    id: 'central',
    title: 'Central Journeys',
    subtitle: 'Hoi An • Hue • Da Nang',
    description: 'Immerse yourself in imperial history and coastal charm. Perfect for food lovers and slow travel seekers.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLDfYeq2SI2quEtpkVzza8me8NVsnijBAJDz_LkxRbt0W0HfTl2EtZ72mZK_26A8kLqvRx-8dQ6pG9sQYxl7SvKyfrVd9Cx9vXApvsp6xmRvd1e_h0nyzr8JVIPQjJ7mPMzawuGz9M9j59Wevph4vgFY7fXxGFtUVS-AU_geTYILfdVTD_UgFxuS_WJ6CXHhc0XJvt7NxZ-_9plEphETQWbtFIGF-Krsu6mfOmDtHkZhun5kHEKtkFATLnkHUyS_VEIiBC2uUGa6lz'
  },
  {
    id: 'south',
    title: 'Southern Journeys',
    subtitle: 'Ho Chi Minh City • Mekong • Phu Quoc',
    description: 'Explore the vibrant energy of the South, from the bustling streets of Saigon to the serene waterways of the Mekong Delta.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAg-XK2P_1r6LJLqGmLMzSowVrBwSa7oiDzd2JDnFF98mv5ha9F4a2TRP3RbBvEeldRWeBvdw40nRP1Xmo0qctaylR36mcbDx_WHnQ_yNhmAYZbazgU5xli_pndA1sJs7MeaqatrBBKZZq6_FeqFdHdBS3YiZqiurxcc3rfWRQWMWG3EZ37Qsb-1ZxmIKLA3sXc96bUA0OMihpGO-EdrkMTPVhPKFw6lXDOMoHVsDSs0LpIxFqqHDqQpyCL1CQD72LiczBVZDsJfQs'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Sarah & Mark',
    location: 'London, UK',
    initials: 'SM',
    stars: 5,
    text: "The attention to detail was incredible. Our trip felt so personal, from the specific food recommendations to the hidden spots our guide took us to in Hanoi. Vietmate truly simplified everything for us.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGmTs10ULqovZXpmAZbhrmiDWogL_ONeD9YpffgE7uppcBDwux3d59DinE21r7XDw4Lwf2M31ZSbzfH2J20XvM1iBRPXq0n-IkhMrEMUWWSVhdPhWCg4ActDUPLlcQxMkhtmPE6ThuO8eFe7NuysNNv6bnYwlkOzujWjAoPbazAGV8M0ITvkWDtcfsCGozoTwyRuG7UauHKHRrwqmExNDf0ZEySCe0i69TdIpJPPswHoC8cohsY3kk8f1Qwfksk5OTLy39wbrkTwIj'
  },
  {
    id: 2,
    name: 'The Harrison Family',
    location: 'Sydney, AU',
    initials: 'TH',
    stars: 5,
    text: "Traveling with three kids isn't easy, but Vietmate made it feel seamless. The pacing was perfect and the activities were engaging for all ages.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEPPzyXQvClVARt7cAYWr4g7cVRPQSPjFuVT3bOoygYke67j3EXve1xBDwMQNk2zLugGoHMQjYN0zw1B62DEU9Ht0KgEnGJs0_FnR6IXBFmHCQL9ahDgawLlUmf9NFCXODG_jXa2Mi4EzuMIG-owsneYI81m7Diu272sFHt7OQ6Ow-KscEZXx4pkpfEmD4x2ke3fzXFDFZBcfnlj3e8OZwMIOasicu1iebzhnkn7eSbrIp6fh9iarmwT5Q7654ltBSejJV7Uw3sAwH'
  },
  {
    id: 3,
    name: 'James & Elena',
    location: 'Berlin, DE',
    initials: 'JE',
    stars: 5,
    text: "The local expertise was unmatched. We went to coffee shops hidden in alleyways that we'd never have found ourselves. Our guide didn't just show us sights; they shared the soul of Vietnam with us.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNFIoS-_pts3qQvujVoymeXfDT6sABz973C8WIuQF7-QLu2ZVO51SrXtFcrz899aeQ9fmdnSqjPIk-qeCwnRRJywYw-_E0EYRE38yhxpvF0oC1dow0dXJBLWZMkUVHefJuaXvEPvBU41Bt8exfEiSHJZUdQfBbhGeWLe5ufo7Km7EiXofr3gifRc5CVZgA1Drb9tNwNRRpKkt8-hAQdp1WoqWAglxlJaekCapkNoeqTi6BeL6e0tRCdwJnd6st_Ve1Um48igjRwh6'
  },
  {
    id: 4,
    name: 'David Chen',
    location: 'California, USA',
    initials: 'DC',
    stars: 5,
    text: "Logistics were flawlessly executed. From the private driver at the airport to the boutique stays in Ninh Binh, everything was perfectly timed. It was the most stress-free holiday I've ever had.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAg-XK2P_1r6LJLqGmLMzSowVrBwSa7oiDzd2JDnFF98mv5ha9F4a2TRP3RbBvEeldRWeBvdw40nRP1Xmo0qctaylR36mcbDx_WHnQ_yNhmAYZbazgU5xli_pndA1sJs7MeaqatrBBKZZq6_FeqFdHdBS3YiZqiurxcc3rfWRQWMWG3EZ37Qsb-1ZxmIKLA3sXc96bUA0OMihpGO-EdrkMTPVhPKFw6lXDOMoHVsDSs0LpIxFqqHDqQpyCL1CQD72LiczBVZDsJfQs'
  },
  {
    id: 5,
    name: 'The Miller Family',
    location: 'Toronto, CA',
    initials: 'TM',
    stars: 5,
    text: "The bespoke nature of the trip was a game changer. We wanted a mix of luxury and rural village experiences, and Vietmate designed a route that felt curated just for us. No cookie-cutter tours here.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLDfYeq2SI2quEtpkVzza8me8NVsnijBAJDz_LkxRbt0W0HfTl2EtZ72mZK_26A8kLqvRx-8dQ6pG9sQYxl7SvKyfrVd9Cx9vXApvsp6xmRvd1e_h0nyzr8JVIPQjJ7mPMzawuGz9M9j59Wevph4vgFY7fXxGFtUVS-AU_geTYILfdVTD_UgFxuS_WJ6CXHhc0XJvt7NxZ-_9plEphETQWbtFIGF-Krsu6mfOmDtHkZhun5kHEKtkFATLnkHUyS_VEIiBC2uUGa6lz'
  },
];
