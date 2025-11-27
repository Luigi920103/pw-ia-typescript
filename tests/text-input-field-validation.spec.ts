// spec: specs/test.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Text Input Field Validation', () => {
  test('Test text input field with various input types', async ({ page }) => {
    // Navigate to the DoTestHere manual testing lab page
    await page.goto('https://dotesthere.com/manual-testing-lab');

    // Click on General Testing link to navigate to the testing section with input fields
    await page.getByRole('link', { name: 'General Testing' }).click();

    // Locate the text input field on the page - Full Name field
    const fullNameInput = page.getByRole('textbox', { name: 'Full Name *' });
    await fullNameInput.click();

    // Leave field empty and attempt to submit - verify validation error appears
    await page.getByRole('button', { name: ' Submit Form' }).click();
    await expect(page.getByText(/Validation errors:/)).toBeVisible();

    // Enter valid text (e.g., "Test Input") and verify it displays
    await fullNameInput.fill('Test Input');
    await expect(fullNameInput).toHaveValue('Test Input');

    // Clear the field and verify clearing works
    await fullNameInput.fill('');
    await expect(fullNameInput).toHaveValue('');

    // Enter special characters and verify handling
    await fullNameInput.fill('Test@#$%^&*()');
    await expect(fullNameInput).toHaveValue('Test@#$%^&*()');

    // Enter maximum length text and verify behavior
    const maxLengthText = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
    await fullNameInput.fill(maxLengthText);
    await expect(fullNameInput).toHaveValue(maxLengthText);

    // Verify field is focusable using keyboard Tab key
    await page.keyboard.press('Tab');
    // Tab should move focus to the next field (Email Address)
    const emailInput = page.getByRole('textbox', { name: 'Email Address *' });
    await expect(emailInput).toBeFocused();
  });
});
