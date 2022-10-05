import genshinCard from 'assets/common/project_card_genshin.png'
import genshinBanner from 'assets/common/project_banner_genshin.png'
import marioCard from 'assets/common/project_card_mario.png'
import marioBanner from 'assets/common/project_banner_mario.png'
import blackjackCard from 'assets/common/project_card_blackjack.png'
import blackjackBanner from 'assets/common/project_banner_blackjack.png'
import opensourceCard from 'assets/common/project_card_opensource.png'
import opensourceBanner from 'assets/common/project_banner_opensource.png'
import kubernetesCard from 'assets/common/project_card_kubernetes.png'
import kubernetesBanner from 'assets/common/project_banner_kubernetes.png'
import capacityCard from 'assets/common/project_card_capacity.png'
import capacityBanner from 'assets/common/project_banner_capacity.png'

const projectDetails = {
  'genshin': {
    cardImage: genshinCard,
    bannerImage: genshinBanner,
    title: 'Genshin Impact: Improve Furniture UX',
    company: 'Personal Project',
    year: '2022',
    mode: 'light',
    similarProjects: ['mario', 'blackjack']
  },
  'mario': {
    cardImage: marioCard,
    bannerImage: marioBanner,
    title: 'Mario Kart UI: Sci-Fi Edition',
    company: 'Personal Project',
    year: '2022',
    mode: 'dark',
    similarProjects: ['genshin', 'blackjack']
  },
  'blackjack': {
    cardImage: blackjackCard,
    bannerImage: blackjackBanner,
    title: 'Fantasy Blackjack Game Assets',
    company: 'Personal Project',
    year: '2022',
    mode: 'light',
    similarProjects: ['genshin', 'mario']
  },
  'opensource': {
    cardImage: opensourceCard,
    bannerImage: opensourceBanner,
    title: 'opensource.twitter.com',
    company: 'Twitter',
    year: '2018',
    mode: 'light',
    similarProjects: ['kubernetes', 'capacity']
  },
  'kubernetes': {
    cardImage: kubernetesCard,
    bannerImage: kubernetesBanner,
    title: 'Kubernetes Dashboard',
    company: 'Twitter',
    year: '2021',
    mode: 'dark',
    similarProjects: ['opensource', 'capacity']
  },
  'capacity': {
    cardImage: capacityCard,
    bannerImage: capacityBanner,
    title: 'Capacity Dashboard',
    company: 'Twitter',
    year: '2020',
    mode: 'light',
    similarProjects: ['opensource', 'kubernetes']
  }
}

export default projectDetails
