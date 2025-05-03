import React, { useState } from 'react';
import { FaUser, FaHistory, FaCog, FaSignOutAlt, FaEdit, FaCheck } from 'react-icons/fa';
import { MdPayment, MdLocalLaundryService } from 'react-icons/md';
import './Account.css';

const Account = () => {
  // User data state
  const [user, setUser] = useState({
    name: 'Priyanshu',
    email: 'priyanshu@dhobighat.com',
    phone: '+91 9876543210',
    address: '123 Laundry St, Mumbai, India',
    preferences: {
      detergent: 'Eco-Friendly',
      ironing: 'Medium Starch',
      delivery: 'Evening (6-9 PM)'
    }
  });

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({...user});

  // Sample order history
  const orderHistory = [
    { id: 'DHOBI1001', date: '2023-05-15', items: 8, total: 1200, status: 'Delivered' },
    { id: 'DHOBI1002', date: '2023-05-10', items: 5, total: 750, status: 'Delivered' },
    { id: 'DHOBI1003', date: '2023-05-05', items: 12, total: 1800, status: 'In Progress' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <div className="profile-section">
            <h2><FaUser /> Profile Information</h2>
            {isEditing ? (
              <div className="edit-form">
                <div className="form-group">
                  <label>Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={editData.name} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={editData.email} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={editData.phone} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea 
                    name="address" 
                    value={editData.address} 
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
                <div className="form-actions">
                  <button className="save-btn" onClick={handleSave}>
                    <FaCheck /> Save Changes
                  </button>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {user.address}</p>
                <button 
                  className="edit-btn"
                  onClick={() => {
                    setEditData({...user});
                    setIsEditing(true);
                  }}
                >
                  <FaEdit /> Edit Profile
                </button>
              </div>
            )}
          </div>
        );
      case 'orders':
        return (
          <div className="orders-section">
            <h2><FaHistory /> Order History</h2>
            <div className="order-list">
              {orderHistory.map(order => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <span className="order-id">#{order.id}</span>
                    <span className={`order-status ${order.status.toLowerCase().replace(' ', '-')}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="order-details">
                    <p><strong>Date:</strong> {order.date}</p>
                    <p><strong>Items:</strong> {order.items}</p>
                    <p><strong>Total:</strong> ₹{order.total}</p>
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'preferences':
        return (
          <div className="preferences-section">
            <h2><MdLocalLaundryService /> Laundry Preferences</h2>
            <div className="preferences-list">
              <div className="preference-item">
                <h3>Detergent Preference</h3>
                <p>{user.preferences.detergent}</p>
              </div>
              <div className="preference-item">
                <h3>Ironing Preference</h3>
                <p>{user.preferences.ironing}</p>
              </div>
              <div className="preference-item">
                <h3>Delivery Time</h3>
                <p>{user.preferences.delivery}</p>
              </div>
              <button className="update-pref-btn">
                Update Preferences
              </button>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="payment-section">
            <h2><MdPayment /> Payment Methods</h2>
            <div className="payment-methods">
              <p>Saved payment methods will appear here</p>
              <button className="add-payment-btn">
                Add Payment Method
              </button>
            </div>
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="account-container">
      <div className="account-sidebar">
        <div className="user-profile">
          <div className="avatar">{user.name.charAt(0)}</div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
        <nav className="account-menu">
          <button 
            className={activeTab === 'profile' ? 'active' : ''}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> My Profile
          </button>
          <button 
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            <FaHistory /> My Orders
          </button>
          <button 
            className={activeTab === 'preferences' ? 'active' : ''}
            onClick={() => setActiveTab('preferences')}
          >
            <MdLocalLaundryService /> Preferences
          </button>
          <button 
            className={activeTab === 'payment' ? 'active' : ''}
            onClick={() => setActiveTab('payment')}
          >
            <MdPayment /> Payment Methods
          </button>
          <button className="logout-btn">
            <FaSignOutAlt /> Log Out
          </button>
        </nav>
      </div>
      <div className="account-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Account;