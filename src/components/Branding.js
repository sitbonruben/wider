import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import '../css/Branding.css';

const Branding = () => {
  const [brandName, setBrandName] = useState('');
  const [logoFiles, setLogoFiles] = useState([]);
  const [brandColors, setBrandColors] = useState({ primary: '', secondary: '', accent: '' });
  const [fonts, setFonts] = useState(['']);
  const [brandTone, setBrandTone] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [savedBrandings, setSavedBrandings] = useState([]);
  const [activeColorPicker, setActiveColorPicker] = useState(null);
  const [showCreateSection, setShowCreateSection] = useState(false);
  const [scrapeUrl, setScrapeUrl] = useState('');

  const fontOptions = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Georgia', 'Courier New', 'Brush Script MT'];
  const audienceOptions = ['General Public', 'Professionals', 'Students', 'Businesses', 'Senior Citizens', 'Children'];

  const handleSaveBranding = () => {
    const newBranding = { brandName, logoFiles, brandColors, fonts, brandTone, targetAudience };
    setSavedBrandings([...savedBrandings, newBranding]);
    clearForm();
    setShowCreateSection(false); // Close the create section after saving
  };

  const clearForm = () => {
    setBrandName('');
    setLogoFiles([]);
    setBrandColors({ primary: '', secondary: '', accent: '' });
    setFonts(['']);
    setBrandTone('');
    setTargetAudience('');
    setScrapeUrl('');
  };

  const handleScrapeWebsite = () => {
    // Implement the API call to scrape branding details
  };

  const handleColorChange = (color) => {
    if (activeColorPicker) {
      setBrandColors({ ...brandColors, [activeColorPicker]: color.hex });
      setActiveColorPicker(null);
    }
  };

  const handleFontChange = (index, value) => {
    const newFonts = [...fonts];
    newFonts[index] = value;
    setFonts(newFonts);
  };

  const addFontField = () => {
    setFonts([...fonts, '']);
  };

  const handleLogoChange = (e) => {
    setLogoFiles([...logoFiles, ...e.target.files]);
  };

  return (
    <div className="branding-container">
      <h2>Branding Component</h2>
      
      <div className="branding-section">
        <div className="scrape-form">
          <input
            type="text"
            placeholder="Enter website URL to scrape"
            value={scrapeUrl}
            onChange={(e) => setScrapeUrl(e.target.value)}
          />
          <button onClick={handleScrapeWebsite} className="scrape-button">Scrape Website</button>
        </div>
      </div>

      <div className="branding-section">
        <button onClick={() => setShowCreateSection(!showCreateSection)} className="create-button">Create Branding</button>
        {showCreateSection && (
          <div className="branding-form">
            <div className="form-group">
              <label htmlFor="brandName">Brand Name</label>
              <input
                id="brandName"
                type="text"
                placeholder="Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="logoFiles">Upload Logo(s)</label>
              <input
                id="logoFiles"
                type="file"
                multiple
                onChange={handleLogoChange}
              />
            </div>
            <div className="color-picker-container">
              <div className="form-group">
                <label>Primary Color</label>
                <div
                  className="color-circle"
                  style={{ backgroundColor: brandColors.primary }}
                  onClick={() => setActiveColorPicker('primary')}
                />
              </div>
              <div className="form-group">
                <label>Secondary Color</label>
                <div
                  className="color-circle"
                  style={{ backgroundColor: brandColors.secondary }}
                  onClick={() => setActiveColorPicker('secondary')}
                />
              </div>
              <div className="form-group">
                <label>Accent Color</label>
                <div
                  className="color-circle"
                  style={{ backgroundColor: brandColors.accent }}
                  onClick={() => setActiveColorPicker('accent')}
                />
              </div>
              {activeColorPicker && (
                <SketchPicker color={brandColors[activeColorPicker]} onChangeComplete={handleColorChange} />
              )}
            </div>
            {fonts.map((font, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`font-${index}`}>Font {index + 1}</label>
                <select
                  id={`font-${index}`}
                  value={font}
                  onChange={(e) => handleFontChange(index, e.target.value)}
                >
                  <option value="">Select Font</option>
                  {fontOptions.map((fontOption, idx) => (
                    <option key={idx} value={fontOption}>{fontOption}</option>
                  ))}
                </select>
              </div>
            ))}
            <button onClick={addFontField} className="add-font-button">Add Font</button>
            <div className="form-group">
              <label htmlFor="brandTone">Brand Tone</label>
              <input
                id="brandTone"
                type="text"
                placeholder="Brand Tone"
                value={brandTone}
                onChange={(e) => setBrandTone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="targetAudience">Select Audience</label>
              <select
                id="targetAudience"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
              >
                <option value="">Select Audience</option>
                {audienceOptions.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <button onClick={handleSaveBranding} className="save-button">Save Branding</button>
          </div>
        )}
      </div>

      <h3>Saved Brandings</h3>
      <div className="saved-brandings">
        {savedBrandings.map((branding, index) => (
          <div key={index} className="branding-item">
            <h4>{branding.brandName}</h4>
            {branding.logoFiles.map((file, idx) => (
              <img key={idx} src={URL.createObjectURL(file)} alt="Logo" className="branding-logo" />
            ))}
            <p>Colors:</p>
            <div className="color-swatches">
              <div className="color-swatch" style={{ backgroundColor: branding.brandColors.primary }} />
              <div className="color-swatch" style={{ backgroundColor: branding.brandColors.secondary }} />
              <div className="color-swatch" style={{ backgroundColor: branding.brandColors.accent }} />
            </div>
            <p>Fonts: {branding.fonts.join(', ')}</p>
            <p>Tone: {branding.brandTone}</p>
            <p>Audience: {branding.targetAudience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branding;
