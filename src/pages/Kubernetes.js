import kubedashBrainstorm1 from 'assets/kubernetes/kubernetes_brainstorm1.png'
import kubedashBrainstorm2 from 'assets/kubernetes/kubernetes_brainstorm2.png'
import oldKubernetes from 'assets/kubernetes/old_kubernetes.mp4'
import newKubernetes from 'assets/kubernetes/new_kubernetes.mp4'

function Kubernetes() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <p>
        Twitter runs jobs and services on Kubernetes, a system for 
        containerized applications. My team built an internal Kubernetes 
        Dashboard UI that enabled engineers to view information about their 
        Kubernetes workloads.
      </p>
      <p>
        However, we received feedback from our users that the initial 
        Kubernetes dashboard was poorly structured.
      </p>
      <h6>Problems</h6>
      <p className='numbered'>
        1. The Kubernetes dashboard's page structure was unnecessarily 
        drawn out—users needed to navigate through many pages and tabs before 
        they would reach any useful information.
      </p>
      <p className='numbered'>
        2. A workload's information was spread out across multiple pages 
        and tabs, and each page didn't fully utilize the screen space.
      </p>

      <h5>Brainstorming</h5>
      <p className='numbered'>
        <b>1. Dashboard structure:</b> How can we reduce the number of steps 
        users take to reach the information they want?
      </p>
      <img src={kubedashBrainstorm1} alt='Kubernetes Dashboard page structure diagram' />
      <p className='numbered'>
        <b>2. Workload details:</b> How can we optimize the layout to provide 
        an overview of all relevant information?
      </p>
      <img src={kubedashBrainstorm2} alt='Kubernetes Dashboard Workload Details mockup' />

      <h5>Mockups</h5>
      <p><b>Before</b></p>
      <video controls>
        <source src={oldKubernetes} type='video/mp4' />
      </video>
      <p><b>After</b></p>
      <video controls>
        <source src={newKubernetes} type='video/mp4' />
      </video>
    </div>
  )
}

export default Kubernetes
