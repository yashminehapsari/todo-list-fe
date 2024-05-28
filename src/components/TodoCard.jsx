import React from 'react'

const TodoCard = () => {
  return (
    <>
        <div className='container d-flex flex-column p-3 bg-primary rounded-4 justify-content-between' style={{width:200, height:300}}>
            <div className='align-self-center'>
                <h5>Title</h5>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi.</p>
            </div>
            <div className='align-self-end'>
                <p>11/11/1111</p>
            </div>
        </div>
    </>
  )
}

export default TodoCard