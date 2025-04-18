import React from 'react'
import './styled.css'
import { Link } from 'react-router-dom'


function Aniamted() {
  return (
    <main>
        <section>
            <h1>Page Not Found!</h1>
            <div>
                <span>4</span>
                <span class="circle">0</span>
                <span>4</span>
            </div>
            <p>We are unable to find the page<br/>you're looking for.</p>
            <div>
                <Link to="/">Back to Home Page</Link>
            </div>
        </section>
    </main>
  )
}

export default Aniamted
