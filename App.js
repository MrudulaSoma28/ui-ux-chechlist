import React, { useState, useEffect } from "react";
import "./App.css";

const checklistItems = [
  {
    name: "Responsive Design",
    tip: "Ensure layout adapts to all screen sizes"
  },
  {
    name: "Accessibility Audit",
    tip: "Check ARIA roles, alt text, and color contrast"
  },
  {
    name: "Consistent Fonts",
    tip: "Use no more than 2-3 font styles consistently"
  },
  {
    name: "Mobile View Tested",
    tip: "Test interface on small devices (360px - 768px)"
  },
  {
    name: "No Console Errors",
    tip: "Open dev tools and fix all red console errors"
  },
  {
    name: "Fast Load Time",
    tip: "Optimize images & lazy load non-critical content"
  },
  {
    name: "Clear Navigation",
    tip: "Use consistent navbar or side menu for flow"
  },
  {
    name: "Good Color Contrast",
    tip: "Text/background contrast ratio should be > 4.5:1"
  },
  {
    name: "Keyboard Navigation",
    tip: "All actions should be accessible via Tab/Enter"
  },
  {
    name: "Semantic HTML Tags",
    tip: "Use tags like <header>, <main>, <section>, etc."
  }
];

function App() {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem("checklist");
    return saved ? JSON.parse(saved) : Array(checklistItems.length).fill(false);
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (index) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const progress = Math.round(
    (checkedItems.filter(Boolean).length / checklistItems.length) * 100
  );

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>Frontend UI/UX Checklist</h1>

      <ul className="checklist">
        {checklistItems.map((item, index) => (
          <li key={index} className="checklist-item">
            <label>
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => toggleItem(index)}
              />
              {item.name}
              <span className="tooltip-icon" title={item.tip}> ℹ</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <p>{progress}% Complete</p>
      </div>
    </div>
  );
}

export default App;
