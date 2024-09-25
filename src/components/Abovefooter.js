import React from 'react'

function Abovefooter() {
  return (
    <div className="container-fluid above-footer">
        <div className="text-center d-block p-5">
            <h1 className="text-white">
                Get our Inspirational blogs delivered to <br /> your inbox weekly.
            </h1>
            <p className="text-white">You will recieve a response from us 24-hours after you subscribe for our <br /> weekly blog.</p>
            <form className='d-flex justify-content-center' action="">
                <div className="bg-white weekly-blog-form me-2">
                    <input className='p-2 float-start' type="text"placeholder='Full Name' />
                </div>
                <button className='weekly-blog-button text-white px-1'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Abovefooter