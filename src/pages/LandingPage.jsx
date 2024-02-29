import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    // navigate to home

    navigate('/home')
  }

  return (
    <>
      <div className='container mt-5'>
        <div className="header row align-item-center">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media player</span></h3>
            <p style={{ textAlign: 'justify' }} className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est tempore libero nesciunt velit corporis, veritatis adipisci modi, consequuntur nulla tempora dolores laudantium officiis, quas voluptatum temporibus eveniet soluta expedita eligendi.</p>
            <button onClick={handleNavigate} className='btn btn-info mt-5'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img  src='https://icons.iconarchive.com/icons/ahdesign91/media-player/512/Adobe-Media-Player-icon.png' ></img>
          </div>

        </div>
        <div className="features">
          <h3 className='text-center'>Feature</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card >
                <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/media-player-icons/80/Media_player_icons-12-512.png" />
                <Card.Body>
                  <Card.Title>Manage Videos</Card.Title>
                  <Card.Text>
                    User can upload , view and remove the  videos according to their preference
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card >
                <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/media-player-icons/80/Media_player_icons-12-512.png" />
                <Card.Body>
                  <Card.Title>Categorize</Card.Title>
                  <Card.Text >
                 User can categorise the videos according to their preference
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card >
                <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/media-player-icons/80/Media_player_icons-12-512.png" />
                <Card.Body>
                  <Card.Title>Watch history</Card.Title>
                  <Card.Text>
                   User are able to see the history of watched videos
                  
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row video border p-5 mt-5 rounded">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple,Fast and Powerful</h3>
            <p><span className='fs-4'>Manage Videos:</span> User can upload , view and remove the  videos according to their preference</p>
            <p><span className='fs-4'>Categorize:</span> User can upload , view and remove the  videos according to their preference</p>
            <p><span className='fs-4'>Watch history:</span> User can upload , view and remove the  videos according to their preference</p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9AizchSQURA?si=JNaxRK6CTG-XOu6u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

        </div>
      </div>
      <hr />
    </>


  )
}

export default LandingPage