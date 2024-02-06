import React from 'react'
import Upload from './Upload'
import Person from '../assets/person.svg'
import Vector from '../assets/Vector.svg'

function UploadPage() {
  return (
    <div className="mb-4 text-center">
      
      <div className="flex mt-2 justify-between">
      <h2 className="text-2xl font-bold mr-4">Upload CSV</h2>
      <div className="flex items-center gap-6">
        <img src={Vector} alt="Notification icon" className="mb-2" />
        <img src={Person} alt="Person icon" className="mb-2" />
      </div>
    </div>
      
      <div className="flex justify-center">
      <div
          style={{
            width: '80vw', /* Adjusted to be a percentage of the viewport width */
            maxWidth: '596px',
            minHeight: '300px', /* Adjusted to ensure that the component doesn't become too small on larger screens */
            borderRadius: '8px',
          }}
        >
          <Upload />
        </div>
      </div>
    </div>
  )
}

export default UploadPage