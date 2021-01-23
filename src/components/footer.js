import React from 'react'
import GoogleMapReact from 'google-map-react';

const footer = props => {

  return (
    <div style={{padding:"10px",background:"#e0ded2", marginBottom:"20px"}}>
      <div>
            Στοιχεία επικοινωνίας
            <ul>
              <li>Email: gymmkast@sch.gr</li>
              <li>Τηλέφωνο & Fax: 24670 28605</li>
            </ul>
        </div>
        <div style={{ height: '20vh', width: '50%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBjjC_HgGBSPeIGBXsJPdqc7jvabyMtBKo" }}
            center={{lat:40.531803, lng:21.259355}}
            defaultCenter={{lat:40.531803, lng:21.259355}}
            zoom={13}
            />
          </div>
      <div>
        Μουσικό Σχολείο Καστοριάς ® 2020
      </div>
    </div>
  )
}

footer.propTypes = {

}

export default footer

