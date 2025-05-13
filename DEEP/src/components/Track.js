import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './CSS/Track.css';

const Track = () => {
  const [activeTrackTab, setActiveTrackTab] = useState('consignment');

  return (
    <div>
      <h1>Track Your Items</h1>
      <div style={{ marginTop: '20px' }}>
        <div className="track-tabs">
          <button 
            onClick={() => setActiveTrackTab('consignment')}
            className={`track-tab ${activeTrackTab === 'consignment' ? 'active' : 'inactive'}`}
          >
            Track Consignment
          </button>
          <button 
            onClick={() => setActiveTrackTab('complaints')}
            className={`track-tab ${activeTrackTab === 'complaints' ? 'active' : 'inactive'}`}
          >
            Track Complaints
          </button>
          <button 
            onClick={() => setActiveTrackTab('pincode')}
            className={`track-tab ${activeTrackTab === 'pincode' ? 'active' : 'inactive'}`}
          >
            Locate Pincode
          </button>
        </div>

        <div className="track-content">
        {activeTrackTab === 'consignment' && (
  <form style={{ maxWidth: '500px' }}>
    <h2 style={{ marginBottom: '15px' }}>Track Your Consignment</h2>
    <div className="form-group">
      <label>Consignment Number</label>
      <input
        type="text"
        placeholder="Enter 13-digit consignment number"
      />
    </div>
    <div className="form-group">
      <label>Contact Number</label>
      <input
        type="tel"
        placeholder="Enter your contact number"
      />
    </div>
    <div className="form-group">
      <label>Delivery Status</label>
      <select defaultValue="">
        <option value="" disabled>Select status</option>
        <option value="in-transit">In Transit</option>
        <option value="out-for-delivery">Out For Delivery</option>
        <option value="delivered">Delivered</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed Delivery</option>
      </select>
    </div>
    <button
      type="submit"
      className="btn"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      <FaSearch /> Track
    </button>
  </form>
)}

{activeTrackTab === 'complaints' && (
  <form style={{ maxWidth: '500px' }}>
    <h2 style={{ marginBottom: '15px' }}>Track Your Complaints</h2>
    
    <div className="form-group">
      <label>Complaint Number</label>
      <input
        type="text"
        placeholder="Enter your complaint reference number"
      />
    </div>
    
    <div className="form-group">
      <label>Contact Number</label>
      <input
        type="tel"
        placeholder="Enter your phone number"
      />
    </div>
    
    <div className="form-group">
      <label>Description of Complaint</label>
      <textarea
        rows="4"
        placeholder="Briefly describe your complaint"
      />
    </div>
    
    <div className="form-group">
      <label>Additional Notes</label>
      <textarea
        rows="3"
        placeholder="Any additional information or comments"
      />
    </div>
    
    <button
      type="submit"
      className="btn"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
      }}
    >
      <FaSearch /> Track
    </button>
  </form>
)}

          {activeTrackTab === 'pincode' && (
            <form style={{ maxWidth: '500px' }}>
              <h2 style={{ marginBottom: '15px' }}>Locate Pincode</h2>
              <div className="form-group">
                <label>Area/Locality</label>
                <input 
                  type="text" 
                  placeholder="Enter area name"
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input 
                  type="text" 
                  placeholder="Enter city name"
                />
              </div>
              <button 
                type="submit"
                className="btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                <FaSearch /> Search
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Track;