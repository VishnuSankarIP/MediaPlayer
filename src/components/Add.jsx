import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';



function Add({setUploadVideoResponse}) {

  const [uploadVideo, setUploadVideo,] = useState({ caption: "", imageUrl: "", youtubeLink: "" })


  const [show, setShow] = useState(false);

  const handleClose = () => {

    setShow(false);
    setUploadVideo({ ...uploadVideo, caption: "", imageUrl: "", youtubeLink: "" })
  }
  const handleShow = () => setShow(true);
  console.log(uploadVideo)

  const setYoutubeEmbedLink = (link) => {

    if (link.includes("v=")) {
      let videoId = link.split("v=")[1].slice(0, 11)
      setUploadVideo({ ...uploadVideo, youtubeLink: `https://www.youtube.com/embed/${videoId}` })


    }
    else {
      setUploadVideo({ ...uploadVideo, youtubeLink: "" })
      alert("Input proper youtube link!!")

    }

  }

  
  const handleUpload = async() => {

    const { caption, imageUrl, youtubeLink } = uploadVideo
    if (caption && imageUrl && youtubeLink) {
      // proceed to store video from 
      const result=await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300)
      {
        alert(`Video '${result.data.caption}'upload scuccesfully!!`)
        setUploadVideoResponse(result.data)
        handleClose()
      }
      else{
        alert("API call Failed..Please try after some time")
      }
    }
    else {
      alert("Please fill the form completely")
    }


  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload a video</h5>
        <button onClick={handleShow} className='btn btn-secondary rounded ms-2'><i className="fa-solid fa-plus"></i></button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel controlId='floatingInputCaption' label='Video Caption' className='mb-3' >
              <Form.Control value={uploadVideo.caption} onChange={e => setUploadVideo({ ...uploadVideo, caption: e.target.value })} type='text' placeholder='Video Caption'></Form.Control>
            </FloatingLabel>
            <FloatingLabel controlId='floatingInputImg' label='Image Url' className='mb-3' >
              <Form.Control value={uploadVideo.imageUrl} onChange={e => setUploadVideo({ ...uploadVideo, imageUrl: e.target.value })} type='text' placeholder='Image Url'></Form.Control>
            </FloatingLabel>
            <FloatingLabel controlId='floatingInputLink' label='Youtube Video Link' className='mb-3' >
              <Form.Control value={uploadVideo.youtubeLink} onChange={e => setYoutubeEmbedLink(e.target.value)} type='text' placeholder='Youtube Video Link'></Form.Control>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add