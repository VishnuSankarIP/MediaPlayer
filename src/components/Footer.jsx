import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
       <div className="footer-content d-flex justify-content-between ">
        <div style={{width:'400px'}} className="media">
            <h5 className='d-flex'> <i class="fa-brands fa-medium me-3"></i></h5>
            <p style={{textAlign:'justify'}}>Designed and build with all the love in the world by the Bootstrap team with the help of our components</p>
            <span>Code licensed MIT,docs CC BY 3.0.</span>
            <span>Currently v5.3.2.</span>
        </div>
        <div className="links d-flex flex-column">
            <h5 className='d-flex'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing page</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Watch History page</Link>
        </div>
        <div className="guides d-flex flex-column">
            <h5>Guides</h5>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
            <a href='https://reactrouter.com/en/main'  target='_blank' style={{textDecoration:'none',color:'white'}}>React Routing</a>
            <a href='https://react-bootstrap.github.io/'  target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>


        </div>
        <div className="contact">
            <h5>Contacts Us</h5>
            <div className="d-flex">
                <input className="form-control me-1" type='text' placeholder='Email Id Please'></input>
                <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-github"></i></a>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-phone"></i></a>
            </div>
        </div>
       </div>
       <p className='text-center mt-5'>Copyright &copy; 2024 Media player.Bulid with React</p>
        </div>
  )
}

export default Footer