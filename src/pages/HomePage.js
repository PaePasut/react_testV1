import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <main role='main'>
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-3'>PPKS</h1>
            <p>Web developed with react (test) By PPKS</p>
            <p>
              <Link
                to='/Product'
                className='btn btn-primary btn-lg'
                role='button'
              >
                สินค้าทั้งหมด
              </Link>
            </p>
          </div>
        </div>
        <div className='container'>
          {/* Example row of columns */}
          <div className='row'>
            <div className='col-md-4'>
              <h2>Heading</h2>
              <p>
                Will you do the same for me? It's time to face the music I'm no
                longer your muse. Heard it's beautiful, be the judge and my
                girls gonna take a vote. I can feel a phoenix inside of me.
                Heaven is jealous of our love, angels are crying from up above.
                Yeah, you take me to utopia.
              </p>
            </div>
            <div className='col-md-4'>
              <h2>Heading</h2>
              <p>
                Standing on the frontline when the bombs start to fall. Heaven
                is jealous of our love, angels are crying from up above. Can't
                replace you with a million rings. Boy, when you're with me I'll
                give you a taste. There’s no going back. Before you met me I was
                alright but things were kinda heavy. Heavy is the head that
                wears the crown.
              </p>
            </div>

            <div className='col-md-4'>
              <h2>Heading</h2>
              <p>
                Playing ping pong all night long, everything's all neon and
                hazy. Yeah, she's so in demand. She's sweet as pie but if you
                break her heart. But down to earth. It's time to face the music
                I'm no longer your muse. I guess that I forgot I had a choice.
              </p>
            </div>
          </div>
          <hr />
        </div>{' '}
        {/* /container */}
      </main>
    </>
  )
}

export default HomePage
