@"

# Test Plan: DoTestHere Manual Testing Lab

**URL:** https://dotesthere.com/manual-testing-lab  
**Date Created:** November 27, 2025  
**Test Plan ID:** DOTESTHERE-001

---

## 1. Overview

The DoTestHere Manual Testing Lab is an educational platform designed to help QA professionals practice manual testing skills. The page contains various interactive elements and components that simulate real-world testing scenarios.

---

## 2. Test Objectives

- Verify all interactive elements function correctly
- Validate form submissions and data handling
- Test error handling and validation messages
- Ensure proper navigation and page navigation
- Test responsive design and UI elements
- Validate accessibility and user interactions

---

## 3. Test Scope

**In Scope:**

- All interactive UI elements on the manual testing lab page
- Form inputs and submission functionality
- Navigation elements and links
- Validation messages and error handling
- Data display and rendering

**Out of Scope:**

- Backend API performance testing
- Security penetration testing
- Load testing
- Cross-browser compatibility (unless critical)

---

## 4. Test Environment

- **Browser:** Chrome/Chromium (Latest)
- **OS:** Windows 10/11
- **Resolution:** 1920x1080
- **Network:** Standard internet connection

---

## 5. Test Scenarios

### Scenario 1: Page Load and Initial Display

**ID:** TS-001  
**Title:** Verify page loads correctly with all elements visible  
**Priority:** High  
**Assumptions:** Fresh browser session, page not cached

**Steps:**

1. Navigate to https://dotesthere.com/manual-testing-lab
2. Wait for page to fully load
3. Verify page title displays correctly
4. Verify all main sections are visible
5. Verify images load without errors
6. Verify no console errors appear

**Expected Outcomes:**

- Page loads within 5 seconds
- All elements render correctly
- No broken images or missing content
- No JavaScript errors in console

**Success Criteria:** Page displays all content without errors  
**Failure Criteria:** Missing elements, broken layout, console errors

---

### Scenario 2: Text Input Field Validation

**ID:** TS-002  
**Title:** Test text input field with various input types  
**Priority:** High  
**Assumptions:** Page is loaded, input fields are accessible

**Steps:**

1. Locate the text input field on the page
2. Leave field empty and attempt to submit
3. Enter valid text (e.g., "Test Input") and verify it displays
4. Clear the field and verify clearing works
5. Enter special characters and verify handling
6. Enter maximum length text and verify behavior
7. Verify field is focusable using keyboard Tab key

**Expected Outcomes:**

- Empty field shows validation error or required message
- Valid text is accepted and displayed
- Field can be cleared successfully
- Special characters are handled appropriately
- Maximum length is enforced if applicable
- Field is keyboard accessible

**Success Criteria:** All input scenarios handled correctly  
**Failure Criteria:** Validation fails, input not accepted, or keyboard navigation broken

---

### Scenario 3: Button Click Functionality

**ID:** TS-003  
**Title:** Test button click actions and responses  
**Priority:** High  
**Assumptions:** Page is loaded, buttons are visible

**Steps:**

1. Identify all buttons on the page
2. Click each button individually
3. Verify appropriate action is triggered
4. Verify visual feedback on click (color change, animation, etc.)
5. Verify button state after click (enabled/disabled)
6. Test button with keyboard (Space and Enter keys)
7. Verify no errors occur after button click

**Expected Outcomes:**

- Each button triggers intended action
- Visual feedback provided on click
- Keyboard navigation works (Space, Enter)
- No errors after interaction
- Button state changes appropriately

**Success Criteria:** All buttons function correctly with mouse and keyboard  
**Failure Criteria:** Button doesn't respond, no visual feedback, keyboard navigation fails

---

### Scenario 4: Form Submission

**ID:** TS-004  
**Title:** Test form submission with valid and invalid data  
**Priority:** High  
**Assumptions:** Page is loaded, form is accessible

**Steps:**

1. Fill form with valid data
2. Click submit button
3. Verify submission success message or page change
4. Clear form and attempt submission with empty fields
5. Verify required field validation messages
6. Fill form with invalid data (if applicable)
7. Verify appropriate error messages display
8. Verify form data persists or clears as designed

**Expected Outcomes:**

- Valid submission succeeds with confirmation
- Empty fields show required field messages
- Invalid data shows specific error messages
- Form behaves consistently
- Success/error messages are clear and helpful

**Success Criteria:** Form validation and submission work correctly  
**Failure Criteria:** Invalid data accepted, unclear error messages, form doesn't submit

---

### Scenario 5: Dropdown/Select Element Testing

**ID:** TS-005  
**Title:** Test dropdown selection functionality  
**Priority:** Medium  
**Assumptions:** Page contains dropdown elements

**Steps:**

1. Locate dropdown element on page
2. Click to open dropdown menu
3. Verify all options are visible
4. Select first option and verify selection
5. Click dropdown again
6. Select different option and verify change
7. Verify selected value displays correctly
8. Test keyboard navigation (Arrow keys, Enter)

**Expected Outcomes:**

- Dropdown opens on click
- All options are visible and selectable
- Selected option is highlighted
- Selection changes when new option chosen
- Keyboard navigation works (arrows to select, Enter to confirm)
- Selected value persists

**Success Criteria:** Dropdown functions correctly with mouse and keyboard  
**Failure Criteria:** Options not visible, selection doesn't update, keyboard navigation fails

---

### Scenario 6: Radio Button and Checkbox Testing

**ID:** TS-006  
**Title:** Test radio button and checkbox functionality  
**Priority:** Medium  
**Assumptions:** Page contains radio buttons or checkboxes

**Steps:**

1. Locate radio button group
2. Click first radio button and verify selection
3. Click another radio button and verify previous deselects
4. Verify only one radio button can be selected at time
5. Locate checkboxes if present
6. Click multiple checkboxes and verify multiple selections allowed
7. Uncheck checkboxes and verify they deselect
8. Test keyboard navigation for both controls

**Expected Outcomes:**

- Radio buttons allow only one selection
- Selecting new radio button deselects previous
- Checkboxes allow multiple selections
- Can uncheck checkboxes independently
- Keyboard navigation works for all controls
- Visual feedback on selection

**Success Criteria:** Radio and checkbox controls function correctly  
**Failure Criteria:** Multiple radio buttons selected, selection doesn't change, keyboard fails

---

### Scenario 7: Link Navigation

**ID:** TS-007  
**Title:** Test hyperlink navigation and external links  
**Priority:** Medium  
**Assumptions:** Page contains hyperlinks

**Steps:**

1. Identify all hyperlinks on page
2. Hover over link and verify hover state shows
3. Click internal link and verify navigation
4. Use browser back button to return
5. Click external link (if present)
6. Verify external link opens in new tab or window
7. Test keyboard navigation to links (Tab key)
8. Test link activation with Enter key

**Expected Outcomes:**

- Hover state visible on all links
- Internal links navigate correctly
- External links open appropriately
- Browser back button works
- Links are keyboard accessible
- Tab order makes sense

**Success Criteria:** All links navigate correctly  
**Failure Criteria:** Links don't work, hover states missing, keyboard navigation broken

---

### Scenario 8: Page Responsiveness and Layout

**ID:** TS-008  
**Title:** Test page layout at different viewport sizes  
**Priority:** Medium  
**Assumptions:** Page should be responsive

**Steps:**

1. Load page at standard desktop size (1920x1080)
2. Verify layout displays correctly
3. Resize browser to tablet size (768x1024)
4. Verify layout adjusts appropriately
5. Resize to mobile size (375x667)
6. Verify layout is still usable
7. Verify no horizontal scrolling needed on mobile
8. Verify text is readable at all sizes
9. Verify touch targets are appropriately sized

**Expected Outcomes:**

- Layout adapts to viewport size
- Content remains readable
- No layout breaking or overlapping
- Touch targets are large enough for mobile
- Navigation remains accessible

**Success Criteria:** Page is responsive and usable at all sizes  
**Failure Criteria:** Layout breaks, text unreadable, content hidden on mobile

---

### Scenario 9: Error Handling and Edge Cases

**ID:** TS-009  
**Title:** Test error messages and edge case handling  
**Priority:** High  
**Assumptions:** Page contains validation or error handling

**Steps:**

1. Attempt to submit form with no data
2. Verify clear error messages display
3. Enter extremely long text in input field
4. Verify behavior (truncation, wrapping, etc.)
5. Enter only spaces in text field
6. Verify validation handles whitespace correctly
7. Attempt rapid multiple submissions
8. Verify no duplicate submissions or errors
9. Verify error messages are dismissible
10. Verify page recovers after error state

**Expected Outcomes:**

- Clear error messages displayed
- Edge cases handled gracefully
- No duplicate submissions
- Errors can be dismissed
- Page remains functional after errors
- Appropriate user guidance provided

**Success Criteria:** All errors handled gracefully with helpful messages  
**Failure Criteria:** Unclear errors, page breaks on edge cases, no error recovery

---

### Scenario 10: Accessibility Testing

**ID:** TS-010  
**Title:** Test basic accessibility features  
**Priority:** Medium  
**Assumptions:** Page should meet basic accessibility standards

**Steps:**

1. Navigate page using only Tab key
2. Verify tab order is logical and sequential
3. Verify all interactive elements are reachable via keyboard
4. Verify focus is clearly visible (focus outline/highlight)
5. Verify all images have alt text (inspect element)
6. Verify form labels are associated with inputs
7. Test with browser zoom to 200%
8. Verify page remains usable at zoom level
9. Verify color contrast is sufficient (use contrast checker)
10. Verify no content relies solely on color

**Expected Outcomes:**

- Full keyboard navigation support
- Clear focus indicators
- Logical tab order
- All images have alt text
- Form fields properly labeled
- Usable at zoom levels
- Sufficient color contrast
- No content hidden at different zoom

**Success Criteria:** Page meets basic accessibility standards  
**Failure Criteria:** Keyboard navigation broken, focus hidden, images missing alt text, poor contrast

---

### Scenario 11: Browser Console Validation

**ID:** TS-011  
**Title:** Test for JavaScript errors and warnings  
**Priority:** High  
**Assumptions:** Developer tools available

**Steps:**

1. Open browser Developer Console (F12)
2. Load the page fresh
3. Perform normal interactions (click, type, submit)
4. Monitor console for errors (red) and warnings (yellow)
5. Note any error messages and their frequency
6. Interact with each major feature
7. Verify no critical errors appear
8. Document any warnings for analysis

**Expected Outcomes:**

- No critical JavaScript errors
- No unhandled promise rejections
- Minimal or no warnings
- Console is clean during normal use
- Network requests complete successfully

**Success Criteria:** No critical errors in console  
**Failure Criteria:** JavaScript errors, unhandled exceptions, failed requests

---

### Scenario 12: Data Persistence and State Management

**ID:** TS-012  
**Title:** Test data persistence across interactions  
**Priority:** Medium  
**Assumptions:** Page stores or displays data

**Steps:**

1. Enter data in form fields
2. Navigate away from form (if applicable)
3. Return to form and verify data still present
4. Submit form and note confirmation
5. Refresh page and verify data handling
6. Verify no data loss on refresh
7. Open Developer Tools Network tab
8. Verify appropriate data is sent/received
9. Clear browser cache and localStorage
10. Verify page still functions normally

**Expected Outcomes:**

- Data persists appropriately
- No unintended data loss
- Page functions after refresh
- Proper client/server communication
- Page handles cleared cache gracefully

**Success Criteria:** Data is managed correctly and persists as designed  
**Failure Criteria:** Data lost, incorrect communication, errors after refresh

---

## 6. Test Execution Notes

- All tests should be executed in a controlled environment
- Each test should start from a fresh page load unless noted otherwise
- Test results should be documented with pass/fail status
- Screenshots should be captured for failed tests
- Any defects found should be logged with steps to reproduce

---

## 7. Exit Criteria

Testing is complete when:

- All test scenarios have been executed
- Critical issues have been documented
- Pass/fail status recorded for each scenario
- Any bugs have been reported to development team
- Test report has been generated and reviewed

---

## 8. Risks and Assumptions

**Risks:**

- Page functionality may be version-specific
- Network latency may affect timing-dependent tests
- Third-party integrations may cause intermittent failures

**Assumptions:**

- Page is accessible at provided URL
- No authentication required for testing
- Standard browser capabilities are available
- JavaScript is enabled in browser
- Page is fully functional (not in maintenance mode)

---

## 9. Dependencies

- Valid internet connection
- Modern web browser (Chrome/Firefox/Safari/Edge)
- Developer tools access for console inspection
- Screen resolution capability for responsive testing

---

## 10. Sign-Off

| Role         | Name | Date | Signature |
| ------------ | ---- | ---- | --------- |
| QA Lead      |      |      |           |
| Test Manager |      |      |           |
| Developer    |      |      |           |

---

**Document Version:** 1.0  
**Last Updated:** November 27, 2025  
**Status:** Ready for Execution
"@ | Out-File -Path 'd:\playwright_poc_ia\pw-ia-typescript\specs\first_ai_test.md' -Encoding UTF8
