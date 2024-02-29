import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addcategoryAPI, getAVideoAPI, getcategoryAPI, removeCategoryAPI, updatedCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category(removeCategoryVideoResponse) {

  const [categoryName, setCategoryName] = useState("")
  const [allCategories, setAllCategories] = useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if (categoryName) {
      const result = await addcategoryAPI({ categoryName, allVideos: [] })
      handleClose()
      getAllCategories()

    }
    else {
      alert("Please fill the form completely")
    }
  }

  const getAllCategories = async () => {
    const result = await getcategoryAPI()
    setAllCategories(result.data)
  }
  console.log(allCategories);
  useEffect(() => {
    getAllCategories()
  }, [removeCategoryVideoResponse])

  const handleRemoveCategory = async (cId) => {
    await removeCategoryAPI(cId)
    getAllCategories()

  }

  const dragOverCategory=(e)=>{
    e.preventDefault()
    console.log("Dragging over category");
  }
  const videoDropped= async (e,categoryId)=>{

    const videoId=e.dataTransfer.getData("videoId")
      console.log(`Video Dropped with Id${videoId},inside category id:${categoryId}`);
      // get details of videoId
      const{data}= await getAVideoAPI(videoId)
      console.log(data);
      // get categories details where we add video
      let selectedCategory=allCategories.find(item=>item.id==categoryId)
      selectedCategory.allVideos.push(data)
      console.log(selectedCategory);
      await updatedCategoryAPI(categoryId,selectedCategory)
      getAllCategories()
  }
  const videoDragStarted=(e,categoryId,videoId)=>{
    console.log(`Drag started from category Id${categoryId} with video Id:${videoId}`);
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }


  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>All Category</h3>
        <button onClick={handleShow} className='btn btn-secondary rounded ms-2'><i class="fa-solid fa-plus"></i></button>
      </div>

      <div className="container-fluid" >
        {allCategories.length > 0 ? allCategories.map
          ((item, index) => (
            <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className=' border rounded p-3 mb-2 mt-3'>
              <div className="d-flex justify-content-between">
                <h5>{item.categoryName}</h5>
                <button className='btn' onClick={() => handleRemoveCategory(item.id)}><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
              <div className="row mt-2">
                {
                  item.allVideos?.length>0 &&
                  item.allVideos?.map((video,index)=>( 
                  <div draggable onDragStart={e=>videoDragStarted(e,item.id,video.id)} key={index} className="col-lg-6">
                      <VideoCard insideCategory={true} displayData={video}/>
                  </div>))
                   
                  
                }
              </div>

            </div>

          )

          )
          :
          <div className='text-danger fw-bolder'>
            No category added yet!!
          </div>
        }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>please fill the following details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId='floatingInputCaption' label='Category name' className='mb-3' >
            <Form.Control type='text' placeholder='category name' onChange={e => setCategoryName(e.target.value)} value={categoryName}></Form.Control>
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>


  )
}

export default Category