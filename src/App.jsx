import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Drawer from './components/Drawer'

// TODO: Signals were found not to be working properly, we'll come back to this!
// Docs: https://preactjs.com/guide/v10/signals

export default function App() {

  // Simple custom language switch for the links, currently applied only to Footer
  // Check links.js and Footer.jsx for more context
  const [currentLangue, setCurrentLanguage] = useState('fi')

  const toggleLangue = () => {
    if (currentLangue === 'fi') {
      setCurrentLanguage('en')
    } else {
      setCurrentLanguage('fi')
    }
  }

  return <>
    {/* Check the Drawer.jsx for more context! */}
    <Drawer>
      <Header toggleLangue={toggleLangue} currentLangue={currentLangue}></Header>
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

      <Footer currentLangue={currentLangue}></Footer>
    </Drawer>

  </>

}