// COPY the exercise condition and the class in the code editor

const copyInstructionsAndCode = () => {
  // 1. Grab instructions text
  const instrDiv = document.querySelector('[data-purpose="instructions-content"]');
  const instrText = instrDiv
    ? instrDiv.innerText.trim()
    : '';

  // 2. Grab ACE editor code
  const aceLines = Array.from(
    document.querySelectorAll('.ace_text-layer .ace_line')
  ).map(el => el.textContent);
  const aceCode = aceLines.join('\n');

  // 3. Combine with a blank line between
  const combined = instrText + '\n\n' + aceCode;

  // 4. Copy via hidden textarea fallback
  const ta = document.createElement('textarea');
  ta.value = combined;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);

  console.log('✅ Instructions + code copied to clipboard');
};

copyInstructionsAndCode();


// Mark all checkboxes as checked
const checkAllCheckboxes = () => {
  document
    .querySelectorAll('input[type="checkbox"]')
    .forEach(box => {
      if (!box.checked) {
        box.click();
      }
    });
};


checkAllCheckboxes();


