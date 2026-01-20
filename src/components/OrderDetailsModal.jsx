import React from "react";
import "./OrderDetailsModal.css";

const OrderDetailsModal = ({ isOpen, onClose, order }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <div className="modal-header">
          <h3>Order Details</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">

          <div className="order-row">
            <span>Order ID:</span>
            <b>{order.id}</b>
          </div>

          <div className="order-row">
            <span>Customer:</span>
            <b>{order.customer}</b>
          </div>

          <div className="order-row">
            <span>Date:</span>
            <b>{order.date}</b>
          </div>

          <div className="order-row">
            <span>Status:</span>
            <b className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </b>
          </div>

          <h4>Items</h4>
          <div className="order-items">
            {order.items.map((item, index) => (
              <div key={index} className="item">
                <span>{item.name}</span>
                <b>{item.qty} × ${item.price}</b>
              </div>
            ))}
          </div>

          <div className="order-total">
            <span>Total:</span>
            <b>${order.total}</b>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Close</button>
          <button className="primary-btn">Print Invoice</button>
        </div>

      </div>
    </div>
  );
};

export default OrderDetailsModal;
