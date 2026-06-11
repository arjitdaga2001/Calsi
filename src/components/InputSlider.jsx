import React, { useState, useEffect } from 'react';
import './components.css';

export function InputSlider({ 
  label, 
  value, 
  min, 
  max, 
  step = 1, 
  onChange, 
  prefix = '', 
  suffix = '',
  formatValue
}) {
  // Local string state so user can type freely (e.g. "5.", "0.0", "12.5")
  // without the input snapping the cursor or stripping the decimal point mid-type.
  const [inputStr, setInputStr] = useState(
    formatValue ? formatValue(value) : String(value)
  );
  const [focused, setFocused] = useState(false);

  // When the external value changes (e.g. slider drag) and the field isn't
  // focused, sync the display string.
  useEffect(() => {
    if (!focused) {
      setInputStr(formatValue ? formatValue(value) : String(value));
    }
  }, [value, focused, formatValue]);

  const handleInputChange = (e) => {
    let raw = e.target.value;

    // Strip prefix/suffix/commas so we parse the bare number
    if (prefix) raw = raw.replace(prefix, '');
    if (suffix) raw = raw.replace(new RegExp(suffix.trim(), 'g'), '');
    raw = raw.replace(/,/g, '').trim();

    // Allow the user to type intermediate states: "", "-", ".", "5.", "5.0"
    setInputStr(raw);

    // Only propagate a real numeric value when we have one
    const parsed = parseFloat(raw);
    if (!isNaN(parsed) && raw !== '' && raw !== '-' && !raw.endsWith('.')) {
      const clamped = Math.min(Math.max(parsed, min), max);
      onChange(clamped);
    }
  };

  const handleFocus = (e) => {
    setFocused(true);
    // Show the bare number (no formatting) while editing
    setInputStr(String(value));
    e.target.select();
  };

  const handleBlur = () => {
    setFocused(false);
    // On blur, commit whatever is typed (or fall back to current value)
    const parsed = parseFloat(inputStr);
    if (!isNaN(parsed)) {
      const clamped = Math.min(Math.max(parsed, min), max);
      onChange(clamped);
      setInputStr(formatValue ? formatValue(clamped) : String(clamped));
    } else {
      // Invalid input — revert to the current valid value
      setInputStr(formatValue ? formatValue(value) : String(value));
    }
  };

  const handleSliderChange = (e) => {
    const val = parseFloat(e.target.value);
    onChange(val);
    if (!focused) {
      setInputStr(formatValue ? formatValue(val) : String(val));
    }
  };

  const percentage = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  // What to display in the text box
  const displayValue = focused
    ? inputStr
    : (formatValue ? formatValue(value) : String(value));

  return (
    <div className="input-slider-container">
      <div className="input-slider-header">
        <label>{label}</label>
        <div className="input-wrapper">
          {prefix && <span className="input-prefix">{prefix}</span>}
          <input
            type="text"
            inputMode="decimal"
            value={displayValue}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {suffix && <span className="input-suffix">{suffix}</span>}
        </div>
      </div>
      <div className="slider-wrapper">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          style={{
            background: `linear-gradient(to right, var(--primary) ${percentage}%, var(--border-color) ${percentage}%)`
          }}
        />
      </div>
    </div>
  );
}
