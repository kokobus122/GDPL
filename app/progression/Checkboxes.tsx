import React, { useEffect, useState } from 'react'

const Checkboxes = () => {
// State to manage checkbox values

const [checkboxes, setCheckboxes] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (checkboxId: string) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxId]: !prevCheckboxes[checkboxId],
    }));
  };

  useEffect(() => {
    const storedCheckboxes = localStorage.getItem('checkboxes');
    if (storedCheckboxes) {
      setCheckboxes(JSON.parse(storedCheckboxes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
  }, [checkboxes]);

  return (
    <div className="checkbox-list">
      {Object.keys(checkboxes).map((checkboxId) => (
        <div key={checkboxId} className="checkbox-item">
          <input
            type="checkbox"
            id={checkboxId}
            checked={checkboxes[checkboxId]}
            onChange={() => handleCheckboxChange(checkboxId)}
          />
          <label htmlFor={checkboxId}>{checkboxId}</label>
        </div>
      ))}
    </div>
  );
};

export default Checkboxes