import teapotPainpoint1 from 'assets/genshin/teapot_painpoint1.png'
import teapotPainpoint2 from 'assets/genshin/teapot_painpoint2.png'
import teapotWireframe from 'assets/genshin/teapot_wireframe.png'
import teapotRendered1 from 'assets/genshin/teapot_rendered1.png'
import teapotRendered2 from 'assets/genshin/teapot_rendered2.png'

function Genshin() {
  return (
    <div className='project-content'>
      <h5>Introduction</h5>
      <p>
        Genshin Impact has a “Teapot” home system, where players can craft 
        furniture, decorate their home realm, and redeem rewards. However, 
        there are mutiple user experience problems with the Teapot’s menu.
      </p>

      <h5>Pain Points</h5>
      <p className='numbered'>
        <b>1.</b> Opening the different Teapot menus requires you to talk the NPC 
        Tubby. You need to go through an unnecessary number of steps to 
        navigate between each Teapot menu:
      </p>
      <img src={teapotPainpoint1} alt='Explanation of current Genshin Teapot system' />
      <p className='numbered'>
        <b>2.</b> The Realm Depot (Furniture Store) menu is difficult to browse, 
        and lacks filters and sorting.
      </p>
      <img src={teapotPainpoint2} alt='Current Genshin Realm Depot store' />

      <h5>Solution</h5>
      <p className='numbered'>
        <b>1.</b> Repurpose the HUD’s existing Teapot icon. The Teapot icon will 
        now open a menu that lets you navigate between all of Tubby’s old 
        menus and the Teapot icon’s original Acheivements menu.
      </p>
      <p className='numbered'>
        <b>2.</b> Modify the Realm Depot layout to be similar to Genshin Impact’s 
        inventory layout, where items are in a grid and detailed information 
        is shown for the selected item. Add filters and sorting.
      </p>
      <img src={teapotWireframe} alt='Genshin Teapot Wireframe' />

      <h5>Rendered Mockup</h5>
      <p>
        The new scroll background indicates that you are in a Teapot-focused 
        menu, while the stylization of the tabs, items, and dropdowns remains 
        consistent with other areas of Genshin Impact’s UI.
      </p>
      <img src={teapotRendered1} alt='Genshin Teapot UI' />
      <img src={teapotRendered2} alt='Genshin Teapot UI with filter dropdown' />
    </div>
  )
}

export default Genshin
