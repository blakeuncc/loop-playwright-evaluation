
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://animated-gingersnap-8cf7f2.netlify.app/';
const USERNAME = 'admin';
const PASSWORD = 'password123';
const testCases = [
{
  //case1//
  project: 'Web Application',
  task: 'Implement user authentication',
  column: 'To Do',
  tags: ['Feature','High Priority'],
},
{
  //case2//
  project:'Web Application',
  task:'Fix navigation bug',
  column:'To Do',
  tags:['Bug'],
},
{
  //case3//
  project:'Web Application',
  task:'Design system updates',
  column:'In Progress',
  tags:['Design'],
},
{
  //case4//
  project:'Mobile Application',
  task:'Push notification system',
  column:'To Do',
  tags:['Feature'],
},
{
  //case5//
  project:'Mobile Application',
  task:'Offline mode',
  column:'In Progress',
  tags:['Feature','High Priority'],
},
{
  //case6//
  project:'Mobile Application',
  task:'App icon design',
  column:'Done',
  tags:['Design'],
},
];
//loginfunc//
async function login(page) {
  await page.goto(BASE_URL);
  await page.fill('input[type="text"]', USERNAME);
  await page.fill('input[type="password"]', PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page.getByRole('button', { name: 'Web Application' })).toBeVisible();
}

test.describe('Loop technical evaluation - data-driven task validation', () => {
  for (const testCase of testCases) {
    test(`${testCase.project} - ${testCase.task}`, async ({ page }) => {
      await login(page);

      await page.getByRole('button', { name: testCase.project }).click();

      const column = page.locator('.flex.flex-col.w-80').filter({
        hasText: testCase.column,
      });

      const taskCard = column.locator('.bg-white').filter({
        hasText: testCase.task,
      });

      await expect(taskCard).toContainText(testCase.task);

      for (const tag of testCase.tags) {
        await expect(taskCard).toContainText(tag);
      }
    });
  }
});