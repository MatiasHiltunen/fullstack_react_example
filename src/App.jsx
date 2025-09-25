import { effect, signal } from '@preact/signals'
import { pageLinks, externalLinks } from './links'

// TODO: Signals were found not to be working properly, we'll come back to this!
// Docs: https://preactjs.com/guide/v10/signals

const currentLangue = signal('fi')



function FooterNav({ allLinks }) {
  const [title, ...links] = allLinks

  const linkComponents = links.map((link, i) => {
    return <a
      key={`${i}_link`}
      href={link.url}
      className="link link-hover"
    >{link.name[currentLangue.value]}</a>
  })

  // `template string ${title}`, python vastine: f""" sndkfjnskdjnf $jokudata """

  return <nav>
    <h6 className="footer-title">{title}</h6>
    {linkComponents}
  </nav>
}

function Footer() {
  return <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
    <FooterNav allLinks={pageLinks}></FooterNav>
    <FooterNav allLinks={externalLinks}></FooterNav>
  </footer>
}


export default function App() {
  const toggleLangue = () => {

    console.log(currentLangue)


    if (currentLangue.value === 'fi') {
      currentLangue.value = 'en'
    } else {
      currentLangue.value = 'fi'
    }



  }

  effect(()=> {
  
    console.log("Current", currentLangue.value)
  })

  return <>
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">

          <button className='btn btn-square' onClick={() => toggleLangue()} > {currentLangue.toJSON()} </button>

          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
          </button>
        </div>
      </div>
    </header>
    <main className="h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <Footer></Footer>

  </>

}