import { expect, test } from '@playwright/test';

test('landing page', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Vanilla Components' })
  ).toBeVisible();
});

test('navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/.*contact/);
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
});

test('native navigation', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/.*contact/);
  await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL('/');
  await expect(
    page.getByRole('heading', { name: 'Vanilla Components' })
  ).toBeVisible();
});

test('landing with specified pathname', async ({ page }) => {
  await page.goto('/about');
  await expect(
    page.getByRole('heading', { name: 'About this project' })
  ).toBeVisible();
});

test('landing on fallback page when pathname is unknown', async ({ page }) => {
  await page.goto('/unknown-path');
  await expect(page).toHaveURL('/not-found');
});
