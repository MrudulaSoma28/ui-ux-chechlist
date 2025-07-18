import React from 'react';
import './ChecklistItem.css'; // Optional CSS file for styling

function ChecklistItem({ task, checked, onCheck }) {
  return (
    <li className={`checklist-item ${checked ? 'checked' : ''}`}>
      <label>
        <input type="checkbox" checked={checked} onChange={onCheck} />
        {task}
      </label>
    </li>
  );
}

export default ChecklistItem;
