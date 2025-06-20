import genshinCard from 'assets/common/project_card_genshin.png'
import genshinBanner from 'assets/common/project_banner_genshin.png'
import marioCard from 'assets/common/project_card_mario.png'
import marioBanner from 'assets/common/project_banner_mario.png'
import opensourceCard from 'assets/common/project_card_opensource.png'
import opensourceBanner from 'assets/common/project_banner_opensource.png'
import kubernetesCard from 'assets/common/project_card_kubernetes.png'
import kubernetesBanner from 'assets/common/project_banner_kubernetes.png'
// import capacityCard from 'assets/common/project_card_capacity.png'
// import capacityBanner from 'assets/common/project_banner_capacity.png'
// import placeholderCard from 'assets/common/project_card_placeholder.png'
// import blackjackBanner from 'assets/common/project_banner_blackjack.png'

const projectDetails = {
  'hogwartsdiary': {
    cardImage: marioCard,
    bannerImage: marioBanner,
    title: 'Hogwarts Diary',
    company: 'Harry Potter: Hogwarts Mystery',
    year: '2024',
    mode: 'dark',
    similarProjects: ['creature', 'spellbindingsequences']
  },
  'creature': {
    cardImage: genshinCard,
    bannerImage: genshinBanner,
    title: 'Creature Needs V2',
    company: 'Harry Potter: Hogwarts Mystery',
    year: '2024',
    mode: 'light',
    similarProjects: ['hogwartsdiary', 'spellbindingsequences']
  },
  'spellbindingsequences': {
    cardImage: marioCard,
    bannerImage: marioBanner,
    title: 'Spellbinding Sequences',
    company: 'Harry Potter: Hogwarts Mystery',
    year: '2023',
    mode: 'dark',
    similarProjects: ['hogwartsdiary', 'creature']
  },
  'seasonalui': {
    cardImage: marioCard,
    bannerImage: marioBanner,
    title: 'Seasonal UI Backgrounds',
    company: 'Harry Potter: Hogwarts Mystery',
    year: '2023',
    mode: 'dark',
    similarProjects: ['hogwartsdiary', 'spellbindingsequences']
  },
  'genshin': {
    cardImage: genshinCard,
    bannerImage: genshinBanner,
    title: 'Genshin Impact: Improve Furniture UX',
    company: 'Personal Project',
    year: '2022',
    mode: 'light',
    similarProjects: ['mario', 'opensource']
  },
  'mario': {
    cardImage: marioCard,
    bannerImage: marioBanner,
    title: 'Mario Kart UI: Sci-Fi Edition',
    company: 'Personal Project',
    year: '2022',
    mode: 'dark',
    similarProjects: ['genshin', 'opensource']
  },
  'opensource': {
    cardImage: opensourceCard,
    bannerImage: opensourceBanner,
    title: 'opensource.twitter.com',
    company: 'Twitter',
    year: '2018',
    mode: 'light',
    similarProjects: ['kubernetes', 'creature']
  },
  'kubernetes': {
    cardImage: kubernetesCard,
    bannerImage: kubernetesBanner,
    title: 'Kubernetes Dashboard',
    company: 'Twitter',
    year: '2021',
    mode: 'dark',
    similarProjects: ['opensource', 'creature']
  },
  // 'capacity': {
  //   cardImage: capacityCard,
  //   bannerImage: capacityBanner,
  //   title: 'Capacity Dashboard',
  //   company: 'Twitter',
  //   year: '2020',
  //   mode: 'light',
  //   similarProjects: ['opensource', 'kubernetes']
  // },
  // 'placeholder': {
  //   cardImage: placeholderCard,
  //   bannerImage: blackjackBanner,
  //   title: '',
  //   company: '',
  //   year: '',
  //   mode: 'light',
  //   similarProjects: ['genshin', 'mario']
  // }
}

export default projectDetails
